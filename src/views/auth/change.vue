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
                <Change />
              </div>
              <ul class="auth-footer">
                <li>
                  <router-link
                    to="/cookies-&-policy"
                    class="text-black text-small"
                    >Conditions</router-link
                  >
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
import Change from '../../components/auth/Change';

export default {
  name: 'forget',
  components:{
      Change
  }
}
</script>

<style scoped lang="scss">
.login {
}
</style>
