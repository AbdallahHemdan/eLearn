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
        :disabled="!changed"
        @click.prevent="update"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      changed: false,
    };
  },
  methods: {
    update() {},
  },
};
</script>

<style lang="scss" scoped>
.container-settings {
  margin-top: 100px;
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
