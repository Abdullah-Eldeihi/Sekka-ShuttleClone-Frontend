<template>
  <div>
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label class="label">Email Address</label>
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email Address"
            v-model.trim="$v.email.$model"
            :class="{ 'is-invalid': submitted && $v.email.$error }"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i
                class="mdi mdi-check-circle-outline"
                :class="{ 'text-danger': submitted && $v.email.$error }"
              ></i>
            </span>
          </div>
          <div v-if="submitted && !$v.email.required" class="invalid-feedback">
            email address is required
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label class="label">Password</label>
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model.trim="$v.password.$model"
            :class="{ 'is-invalid': submitted && $v.password.$error }"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i
                class="mdi mdi-check-circle-outline"
                :class="{ 'text-danger': submitted && $v.password.$error }"
              ></i>
            </span>
          </div>
          <div
            v-if="submitted && !$v.password.required"
            class="invalid-feedback"
          >
            password is required
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label class="label">Confirm Password</label>
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            v-model.trim="$v.confirmPassword.$model"
            :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }"
          />
          <div class="input-group-append">
            <span class="input-group-text">
              <i
                class="mdi mdi-check-circle-outline"
                :class="{
                  'text-danger': submitted && $v.confirmPassword.$error,
                }"
              ></i>
            </span>
          </div>
          <div
            v-if="submitted && $v.confirmPassword.$error"
            class="invalid-feedback left"
          >
            <span v-if="!$v.confirmPassword.required"
              >Confirm Password is required</span
            >
            <span v-if="confirmPassword && !$v.confirmPassword.sameAsPassword"
              >Password and Confirm Password should match</span
            >
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button
          class="btn btn-primary submit-btn btn-block"
          :disabled="loading"
        >
          Change Password
          <span
            class="spinner-border spinner-border-sm"
            v-show="loading"
          ></span>
        </button>
      </div>

      <div v-if="error" class="alert alert-danger alert-sm">{{ error }}</div>
      <div v-if="success" class="alert alert-success alert-sm">
        {{ success }}
      </div>
    </form>
    <router-link
      :to="{ name: 'forget' }"
      class="text-small forgot-password text-black"
    >
      Forgot Password ?</router-link
    >
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

import { authService } from "../../services";
export default {
  mixins: [validationMixin],
  name: "change",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      submitted: false,
      loading: false,
      error: "",
      success: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAsPassword: sameAs("password") },
  },
  methods: {
    async changePassword() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const response = await authService.resetPassword(
        this.email,
        this.password,
        this.$route.params.resetToken
      );
      if (response.status == 401) {
        this.error = response.message;
        this.loading = false;
      } else {
        this.success = response.message;
        this.loading = false;
        setTimeout(() => this.$router.push({ path: "/auth/login" }), 5000);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
