<template lang="html">
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import store from "./store";
export default {
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        console.log("test data", err.status);
        if (err.status === 401) {
          this.$store.dispatch("isLoggedIn");
        }
        throw err;
      });
    });

  },
};
</script>

<style>
@import "../node_modules/vue-good-table/dist/vue-good-table.css";
@import "../node_modules/mdi/css/materialdesignicons.min.css";
@import "../node_modules/flag-icon-css/css/flag-icon.min.css";
@import "../node_modules/typicons.font/src/font/typicons.css";
</style>

<style lang="scss">
@import "assets/scss/shared/style";
// .form-control{
//   height: 35px !important;
// }
</style>

