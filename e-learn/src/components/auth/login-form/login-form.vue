<template>
  <form class="login">
    <!-- Username Field -->
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="Username"
        v-model="username"
      />
      <label for="username" class="auth__input-label">Username</label>
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
      <div class="form-check col-md">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          v-model="remember"
        />
        <label class="form-check-label" for="flexCheckDefault"> Remember me </label>
      </div>

      <div class="forgot-password col-md">
        <a href="/forgot" class="forgot-text"> Forget your password ? </a>
      </div>
    </div>

    <!-- Login Btn -->
    <button
      type="submit"
      class="auth__submit-btn btn btn-block"
      :disabled="!username || !password"
      @click.prevent="submit"
    >
      Log In
    </button>
  </form>
</template>

<script>
import axios from 'axios';
import { base } from '@/utilities/api';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      errorMessage: '',
    };
  },
  computed: {
    payload() {
      return {
        username: this.username,
        password: this.password,
      };
    },
  },
  methods: {
    submit() {
      axios
        .post(`${base}/login`, this.payload)
        .then(response => {
          console.log(response);

          // if remember is set to true, set the user token in local storage
          // in success, redirect the use to home page
        })
        .catch(error => {
          // if error, set the error message to the received error message
          console.log(error);
          this.errorMessage = error;
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
