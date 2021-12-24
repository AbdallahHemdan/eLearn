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
      <label for="username" class="auth__input-label">Username</label>
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

    <!-- Full name fields -->
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
          <label for="first-name" class="auth__input-label">First Name</label>
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
          <label for="last-name" class="auth__input-label">Last Name</label>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="form-floating mb-3">
        <input class="form-control" type="date" id="date" placeholder="Date" v-model="date" />
        <label for="date" class="auth__input-label">Date</label>
      </div>
    </div>

    <select
      class="form-select auth__user-type mb-3"
      :class="{ 'auth__input-label': this.userType === '' }"
      aria-label="Default select example"
      v-model="userType"
    >
      <option disabled value="">Select your type</option>
      <option value="learner">Learner</option>
      <option value="instructor">Instructor</option>
    </select>

    <div class="d-flex justify-content-between align-items-center">
      <div class="form-check col-md">
        <input class="form-check-input" type="checkbox" />
        <label class="auth__input-label"> I agree on all terms, conditions </label>
      </div>
    </div>

    <!-- Signup Btn -->
    <button
      type="submit"
      class="btn btn-block auth__submit-btn"
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

      date: '',
      userType: '',

      errorMessage: '',
    };
  },
  computed: {
    payload() {
      return {
        email: this.email,
        username: this.username,
        password: this.password,

        firstName: this.firstName,
        lastName: this.lastName,

        date: this.date,
        userType: this.userType,
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
