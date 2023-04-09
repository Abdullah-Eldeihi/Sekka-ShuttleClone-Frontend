<template>
  <div>
    <!-- Page Title Header Starts-->
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card card-statistics">
          <div class="row">
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <div class="text-primary mr-0 mr-sm-4 icon-lg">
                    <router-link
                      :to="{
                        path: '/' + this.$store.state.auth.role + '/customers',
                      }"
                      style="text-decoration: none; color: #3a8697"
                    >
                      <countTo
                        :startVal="countCustomer.startVal"
                        :endVal="countCustomer.endVal"
                        :duration="countCustomer.duration"
                      ></countTo>
                    </router-link>
                  </div>
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Customers</p>
                    <div class="fluid-container"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <div class="text-primary mr-0 mr-sm-4 icon-lg">
                    <router-link
                      :to="{
                        path: '/' + this.$store.state.auth.role + '/agents',
                      }"
                      style="text-decoration: none; color: #3a8697"
                    >
                      <countTo
                        :startVal="countAgent.startVal"
                        :endVal="countAgent.endVal"
                        :duration="countAgent.duration"
                      ></countTo>
                    </router-link>
                  </div>
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Agents</p>
                    <div class="fluid-container"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <div class="text-primary mr-0 mr-sm-4 icon-lg">
                    <router-link
                      :to="{
                        path: '/' + this.$store.state.auth.role + '/drivers',
                      }"
                      style="text-decoration: none; color: #3a8697"
                    >
                      <countTo
                        :startVal="countDriver.startVal"
                        :endVal="countDriver.endVal"
                        :duration="countDriver.duration"
                      ></countTo>
                    </router-link>
                  </div>
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Drivers</p>
                    <div class="fluid-container"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-col col-xl-3 col-lg-3 col-md-3 col-6">
              <div class="card-body">
                <div
                  class="d-flex align-items-center justify-content-center flex-column flex-sm-row"
                >
                  <div class="text-primary mr-0 mr-sm-4 icon-lg">
                    <router-link
                      :to="{
                        path:
                          '/' +
                          this.$store.state.auth.role +
                          '/help-and-support',
                      }"
                      style="text-decoration: none; color: #3a8697"
                    >
                      <countTo
                        :startVal="countHelp.startVal"
                        :endVal="countHelp.endVal"
                        :duration="countHelp.duration"
                      ></countTo>
                    </router-link>
                  </div>
                  <div class="wrapper text-center text-sm-left">
                    <p class="card-text mb-0">Help & Support</p>
                    <div class="fluid-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dashboardService } from "../../services/dashboard.service";
import countTo from "vue-count-to";
export default {
  name: "CountTo",
  data() {
    return {
      countDriver: {
        startVal: 10,
        endVal: 0,
      },
      countCustomer: {
        startVal: 200,
        endVal: 0,
      },
      countAgent: {
        startVal: 10,
        endVal: 0,
      },
      countHelp: {
        startVal: 5,
        endVal: 0,
      },
    };
  },
  components: { countTo },
  mounted() {
    this.loadcount();
  },
  methods: {
    loadcount() {
      dashboardService.loadCountData().then((response) => {
        this.countDriver = response.data.countDriver;
        this.countCustomer = response.data.countCustomer;
        this.countAgent = response.data.countAgent;
        this.countHelp = response.data.countHelp;
      });
    },
    // toggleProBanner: function () {
    //   $('body').toggleClass('pro-banner-collapse')
    // }
  },
};
</script>

<style></style>
