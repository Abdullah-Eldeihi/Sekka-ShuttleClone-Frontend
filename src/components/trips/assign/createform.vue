<template>
  <div>
    <b-form @submit.prevent="createAssign">
      <b-form-group
        label="Routes"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-select
          v-model.trim="$v.form.route.$model"
          :options="roptions"
          :class="{
            'is-invalid': submitted && $v.form.route.$error,
          }"
          :state="validateState('route')"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Please select an route --</b-form-select-option
            >
          </template>
        </b-form-select>
        <div
          v-if="submitted && !$v.form.route.required"
          class="invalid-feedback"
        >
          route is required
        </div>
      </b-form-group>
      <b-form-group
        label="Driver"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <v-select
          @search="fetchDrivers"
          label="type"
          :filterable="false"
          :options="options"
          v-model="form.driver"
        >
          <template slot="no-options"> type to drivers phone, name.. </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.title }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.title }}
            </div>
          </template>
        </v-select>
      </b-form-group>
      <b-form-group
        label="Bus"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <v-select
          multiple
          @search="fetchAssistants"
          :filterable="false"
          :options="aoptions"
          v-model="form.assistant"
        >
          <template slot="no-options">
            type to assistants phone, name..
          </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.title }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.title }}
            </div>
          </template>
        </v-select>
      </b-form-group>

      <b-form-group
        label="Date Time"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <Datetime
          type="datetime"
          title="Date Time"
          v-model="form.date_time"
          input-class="form-control"
          value-zone="Asia/Kolkata"
          zone="Asia/Kolkata"
          class="theme-ferri"
          :format="{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          }"
          :phrases="{ ok: 'Continue', cancel: 'Exit' }"
          :week-start="7"
          :min-datetime="minDatetime"
          :max-datetime="maxDatetime"
          auto
        ></Datetime>
      </b-form-group>

      <b-form-group class="col-md-6 offset-md-5">
        <b-button type="submit" class="btn btn-lg btn-success text-center"
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { driverService, routeService, assignService } from "../../../services";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import vSelect from "vue-select";
import lodash from "lodash";
import "vue-select/src/scss/vue-select.scss";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import moment from "moment-timezone";

export default {
  mixins: [validationMixin],
  name: "createform",
  data() {
    return {
      submitted: false,
      loading: false,
      options: [],
      aoptions: [],
      roptions: [],
      form: {
        route: null,
        driver: {},
        assistant: [],
        date_time: "",
      },
      minDatetime: moment().tz("Asia/Kolkata").valueOf().toString(),
      maxDatetime: moment().tz("Asia/Kolkata").valueOf().toString(),
    };
  },
  validations: {
    form: {
      route: { required },
      driver: { required },
      date_time: { required },
    },
  },
  components: {
    vSelect,
    Datetime,
  },
  methods: {
    async loadRoutes() {
      const response = await routeService.load();
      if (response.status) {
        this.roptions = response.data;
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    fetchDrivers(search, loading) {
      if (search.length) {
        loading(false);
        let type = "driver";
        this.search(loading, search, type, this);
      }
    },
    fetchAssistants(search, loading) {
      if (search.length) {
        loading(false);
        let type = "assistant";
        this.search2(loading, search, type, this);
      }
    },
    search: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await driverService.q({
          type: type,
          search: search,
        });
        vm.options = response.items;

        loading(false);
      } catch (err) {
        console.log("err", err);
        // this.$toast.open({
        //   message: err,
        //   type: "error",
        //   position: "top-right",
        //   duration: 5000,
        // });
      }
    }, 350),
    search2: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await driverService.q({
          type: type,
          search: search,
        });
        vm.aoptions = response.items;

        loading(false);
      } catch (err) {
        console.log("err", err);
        // this.$toast.open({
        //   message: err,
        //   type: "error",
        //   position: "top-right",
        //   duration: 5000,
        // });
      }
    }, 350),
    async createAssign() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        this.form.adminId = this.$store.state.auth.user.id; // admin Id
        const reponse = await assignService.create(this.form);
        if (reponse.status) {
          this.$toast.open({
            message: reponse.message,
            type: "success",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });
          setTimeout(
            () =>
              this.$router.push({
                path: `/${this.$store.state.auth.role}/trips/assign/list`,
              }),
            3000
          );
        }
      } catch (e) {
        this.$toast.open({
          message: e + "dfsdf",
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
  mounted() {
    this.loadRoutes();
  },
};
</script>

<style scoped>
.theme-ferri .vdatetime-popup__header,
.theme-ferri .vdatetime-calendar__month__day--selected > span > span,
.theme-ferri .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #3a8697;
}

.theme-ferri .vdatetime-year-picker__item--selected,
.theme-ferri .vdatetime-time-picker__item--selected,
.theme-ferri .vdatetime-popup__actions__button {
  color: #3a8697;
}
</style>
