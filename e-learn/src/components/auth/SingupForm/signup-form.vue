<template>
  <form class="form-container">
    <!-- Username Field -->
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="Username"
        v-model="username"
      />
      <label for="username" class="input-label">Username</label>
    </div>

    <!-- Email Field -->
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="username@gmail.com"
        v-model="email"
      />
      <label for="email" class="input-label">Email</label>
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
      <label for="password" class="input-label">Password</label>
    </div>

    <div class="alert alert-danger err-msg" role="alert" v-show="errorMessage">
      {{ this.errorMessage }}
    </div>

    <!-- Remember me -->
    <div class="row">
      <div class="col">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="First Name"
            v-model="firstName"
          />
          <label for="first-name" class="input-label">First Name</label>
        </div>
      </div>

      <div class="col">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Last Name"
            v-model="lastName"
          />
          <label for="last-name" class="input-label">Last Name</label>
        </div>
      </div>
    </div>

    <!-- Signup Btn -->
    <button
      type="submit"
      class="btn btn-block signup-btn"
      :disabled="!username || !password"
      @click.prevent="signup"
    >
      Signup
    </button>
  </form>
</template>

<script>
import axios from 'axios';
import { base } from '@/utilities/api';

export default {
  name: 'SignupForm',
  data() {
    return {
      email: '',
      username: '',
      password: '',

      firstName: '',
      lastName: '',

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
    signup() {
      axios
        .post(`${base}/signup`, this.payload)
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
.form-main {
  width: 100%;
  min-height: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}

.input-label {
  color: #777;
}

.signup-btn {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 6px;
  width: 100%;
  background-color: $main-color;
  color: $white;

  &:hover {
    background-color: $sub-color;
  }
}

.forgot-password {
  text-align: end;
}

.forgot-text {
  color: $main-color;
  text-decoration: none;
}
</style>
