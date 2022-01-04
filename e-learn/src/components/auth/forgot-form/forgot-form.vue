<template>
  <form class="forgot">
    <!-- Email Field -->
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Email"
        v-model="email"
      />
      <label for="email" class="auth__input-label">Email</label>
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
      :disabled="!email"
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
      email: "",
      success: false,
      validationMsg: "",
    };
  },
  computed: {
    payload() {
      return {
        email: this.email,
      };
    },
  },
  methods: {
    submit() {
      axios
        .post(`${base}/forgot`, this.payload)
        .then((response) => {
          console.log(response);

          // if remember is set to true, show success message
          // "Please check your email to reset your password"
          this.success = true;
          this.validationMsg = "Please check your email to reset your password";
        })
        .catch((error) => {
          // if error, set the error message to the received error message
          console.log(error.message);
          this.validationMsg = "Email Not Found";
        });
    },
  },
};
</script>
