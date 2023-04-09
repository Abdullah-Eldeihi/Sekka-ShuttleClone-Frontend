<template lang="html">
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div
          class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one"
        >
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <Forget />
              </div>
              <ul class="auth-footer">
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <router-link to="/terms" class="text-black text-small"
                    >Terms</router-link
                  >
                </li>
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
import Forget from '../../components/auth/Forget';

export default {
      beforeRouteEnter (to, from, next) {
       if (store.getters.isAuthenticated) {
          return next({path :'/'})
       }
       next()
  },
  name: 'forget',
  components:{
      Forget
  }
}
</script>

<style scoped lang="scss">
.login {
}
</style>
