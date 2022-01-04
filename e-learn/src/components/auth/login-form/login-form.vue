<template>
  <form class="login">
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

    <div class="alert alert-danger err-msg" role="alert" v-show="errorMessage">
      {{ this.errorMessage }}
    </div>

    <!-- Remember me -->
    <div class="d-flex justify-content-between align-items-center">
      <div class="forgot-password col-md">
        <a href="/forgot" class="forgot-text"> Forget your password ? </a>
      </div>
    </div>

    <!-- Login Btn -->
    <button
      type="submit"
      class="auth__submit-btn btn btn-block"
      :disabled="!email || !password"
      @click.prevent="submit"
    >
      Log In
    </button>
  </form>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { setAccessToken, setUserData } from "@/utilities/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      errorMessage: "",
    };
  },
  computed: {
    payload() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
  methods: {
    submit() {
      axios
        .post(`${base}/login`, this.payload)
        .then(({ data }) => {
          setAccessToken(data.token);
          setUserData(data.userData);

          window.location = "/";
        })
        .catch((error) => {
          // if error, set the error message to the received error message
          this.errorMessage = error.response.data.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password {
  text-align: end;
}

.forgot-text {
  color: $main-color;
  text-decoration: none;
}
</style>
