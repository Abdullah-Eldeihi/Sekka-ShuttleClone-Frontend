<template>
  <div>
    <b-form @submit.prevent="updateBooking">
      <b-form-group
        label="PNR No"
        label-for="pnr-no-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="pnr-no-input"
          v-model.trim="propBookingObj.pnr_no"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Route Name"
        label-for="route-name-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="route-name-input"
          v-model.trim="propBookingObj.route_name"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Sub total"
        label-for="sub-total-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="sub-total-input"
          v-model.trim="propBookingObj.sub_total"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="tax"
        label-for="tax-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="tax-input"
          v-model.trim="propBookingObj.tax"
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Final total fare"
        label-for="final-total-fare-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="final-total-fare-input"
          v-model.trim="propBookingObj.final_total_fare"
          readonly
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
//import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "Booking-detail",
  data() {
    return {
      form: {
        pnr_no: "",
      },
    };
  },
  props: {
    propBookingObj: Object,
  },
  validations: {},
  methods: {
    updateBooking() {},
  },
};
</script>

<style lang="scss" scoped></style>
