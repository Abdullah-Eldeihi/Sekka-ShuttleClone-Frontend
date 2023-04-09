import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import Vuelidate from "vuelidate";
import JQuery from "jquery";
import VueSweetalert2 from "vue-sweetalert2";
import VueToast from "vue-toast-notification";
import VueGoodTablePlugin from "vue-good-table";
import VueMeta from "vue-meta";
import * as VueGoogleMaps from "vue2-google-maps";
import { ColorPicker, ColorPanel } from "one-colorpicker";
import VueLazyload from "vue-lazyload";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAPS_API_KEY, 
    libraries: "places,directions", // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
    region: "IN",
    language: "en",
  },
});
import store from "./store";

// eslint-disable-next-line
let $ = JQuery

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

// import the styles
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue-good-table/dist/vue-good-table.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "nprogress/nprogress.css";

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2, options);
Vue.use(VueToast);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.use(VueLazyload);

Vue.use(VueGoodTablePlugin);
Vue.use(ColorPanel);
Vue.use(ColorPicker);

Vue.prototype.$appName = "Sekka";
Vue.prototype.$year = new Date().getFullYear();

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
