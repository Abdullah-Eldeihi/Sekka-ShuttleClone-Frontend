<template>
  <div>
    <form method="POST" @submit.prevent="loginUser">
      <div class="form-group">
        <label class="label">Email Address</label>
        <div class="input-group">
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email Address"
            v-model="email"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="mdi mdi-check-circle-outline"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="label">Password</label>
        <div class="input-group">
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="*********"
            v-model="password"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="mdi mdi-check-circle-outline"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary submit-btn btn-block">Login</button>
      </div>
      <div class="form-group d-flex justify-content-between">
        <div class="form-check form-check-flat mt-0">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" checked />
            Keep me signed in
          </label>
        </div>
        <router-link
          :to="{ name: 'forget' }"
          class="text-small forgot-password text-black"
        >
          Forgot Password</router-link
        >
      </div>
      <div class="text-block text-center my-3">
        <!--<span class="text-small font-weight-semibold">Not a member ?</span>

       <router-link to="register" class="text-black text-small"
          >Create new account</router-link
        > -->
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.auth.status.loggingIn;
    },
  },
  created() {
    this.$store.dispatch("auth/logout");
  },
  methods: {
    loginUser() {
      const { email, password } = this;
      const { dispatch } = this.$store;
      if (email && password) {
        dispatch("auth/login", { email, password });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
