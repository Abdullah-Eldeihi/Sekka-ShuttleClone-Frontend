<template lang="html">
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div
          class="content-wrapper d-flex align-items-center auth theme-one"
        >
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <Login />
              </div>
              <ul class="auth-footer">
                <li>
                  <a href="#">Help</a>
                </li>
                =
              </ul>
              <p class="footer-text text-center">
                copyright © {{ this.$year }} {{ this.$appName }}. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script lang="js">
import store from "../../store";
import Login from '../../components/auth/Login';

export default {
  beforeRouteEnter (to, from, next) {
    console.log('isAuthenticated status : ',store.getters.isAuthenticated);
       if (store.getters.isAuthenticated) {
          return next({path :'/'})
       }
       next()
  },
  name: 'login',
  components:{
      Login
  }
}
</script>

<style scoped lang="scss">
.login {
}
</style>
