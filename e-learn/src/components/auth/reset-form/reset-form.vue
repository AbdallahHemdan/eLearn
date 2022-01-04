<template>
  <form class="forgot">
    <!-- Password Field -->
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
        v-model="password"
      />
      <label for="password" class="auth__input-label">Password</label>
    </div>

    <!-- Confirm Password Field -->
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        id="confirm-password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />
      <label for="confirm-password" class="auth__input-label"
        >Confirm Password</label
      >
    </div>

    <!-- Validation Message -->
    <div
      :class="{
        alert: true,
        'alert-danger': !success,
        'alert-success': success,
      }"
      role="alert"
      v-show="this.validationMsg"
    >
      {{ this.validationMsg }}
    </div>

    <!-- Reset Btn -->
    <button
      type="submit"
      class="auth__submit-btn btn btn-block"
      :disabled="!password || !confirmPassword"
      @click.prevent="submit"
    >
      Reset Password
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";

export default {
  name: "ForgotForm",
  data() {
    return {
      password: "",
      confirmPassword: "",

      success: false,
      validationMsg: "",
    };
  },
  computed: {
    payload() {
      return {
        password: this.password,
        token: this.$route.params.id,
      };
    },
  },
  methods: {
    submit() {
      if (this.password !== this.confirmPassword) {
        this.validationMsg = "Passwords do not match";
        return;
      }
      const token = this.$route.params;
      axios
        .post(`${base}/reset`, this.payload, {
          headers: {
            Authorization: `Bearer ${token.id}`,
          },
        })
        .then((response) => {
          console.log(response);

          // if remember is set to true, show success message
          // "Your password has been reset successfully"
          this.success = true;
          this.validationMsg = "Your password has been reset successfully";
          window.location = "/login";
        })
        .catch((error) => {
          // if error, set the error message to the received error message
          console.log(error);
          this.validationMsg = error.response.data.message;
        });
    },
  },
};
</script>
