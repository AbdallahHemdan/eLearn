<template>
  <div class="container-settings">
    <div class="header">
      <h2 class="header__title">Edit your Account</h2>
    </div>
    <form class="form">
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

      <!-- Name Fields -->
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

      <!-- Birth Date -->
      <div class="form-floating mb-3">
        <input
          type="date"
          class="form-control"
          id="birthdate"
          v-model="birthDate"
        />
        <label for="birthDate" class="input-label">Birth Date</label>
      </div>

      <!-- Update Btn -->
      <button
        type="submit"
        class="btn btn-block update-btn"
        :disabled="!isChanged"
        @click.prevent="update"
      >
        Update
      </button>
    </form>

    <hr data-v-7606662e="" class="featurette-divider" />
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

export default {
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      userData: {},
    };
  },
  methods: {
    update() {
      axios
        .put(`${base}/users/_id=${getUserData()._id}`, this.payload, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.getUserData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUserData() {
      axios
        .get(`${base}/users/_id=${getUserData()._id}`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.userData = response.data;
          this.updateModels();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateModels() {
      this.username = this.userData.username;
      this.email = this.userData.email;
      this.firstName = this.userData.firstName;
      this.lastName = this.userData.lastName;
      this.birthDate = this.userData.birthDate;
    },
  },
  created: function () {
    this.getUserData();
  },
  computed: {
    isChanged: function () {
      if (this.userData.email !== this.email) return true;
      if (this.userData.username !== this.username) return true;
      if (this.userData.lastName !== this.lastName) return true;
      if (this.userData.firstName !== this.firstName) return true;
      if (this.userData.birthDate !== this.birthDate) return true;
      return false;
    },
    payload() {
      return {
        email: this.email,
        username: this.username,
        lastName: this.lastName,
        firstName: this.firstName,
        birthdate: this.birthDate,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container-settings {
  text-align: center;

  .header {
    &__title {
      font-weight: bold;
    }
  }

  .form {
    max-width: 70%;
    margin: 20px auto;

    .update-btn {
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 10px;
      width: 50%;
      background-color: $main-color;
      color: $white;

      &:hover {
        background-color: $sub-color;
      }
    }
  }
}
</style>
