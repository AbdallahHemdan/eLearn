<template>
  <div class="manage-container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Users</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index" class="table__row">
          <td>{{ user.username }}</td>
          <td>{{ user.type }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-block upgrade-btn"
              @click.prevent="upgrade(user.username)"
              v-if="user.type == 'learner'"
            >
              Upgrade
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getAllUsers() {
      axios
        .get(`${base}/users`)
        .then((response) => {
          console.log(response);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
          // TO be removed after integration with backend
          this.users = [
            {
              username: "Eman",
              type: "learner",
            },
            {
              username: "Hemdan",
              type: "learner",
            },
            {
              username: "Adel",
              type: "instructor",
            },
          ];
        });
    },
    upgrade(username) {
      axios
        .put(`${base}/upgrade-user`, {
          username: username,
        })
        .then((response) => {
          console.log(response);
          // TODO: Update the list without extra requests
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    this.getAllUsers();
  },
};
</script>

<style lang="scss" scoped>
.manage-container {
  margin: 100px;

  .table {
    &__row {
      .upgrade-btn {
        padding: 10px;
        background-color: $main-color;
        color: $white;

        &:hover {
          background-color: $sub-color;
        }
      }
    }
  }
}
</style>
