<template>
  <div class="manage-container">
    <table class="table table-borderless table-fixed">
      <thead>
        <tr>
          <th scope="col" class="table__title">Users</th>
        </tr>
      </thead>
      <thead>
        <tr class="table__header">
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="(user, index) in users" :key="index" class="table__row user">
          <td>
            <img src="@/assets/svgs/avatar.svg" alt="" class="user__img" />
            {{ user.username }}
          </td>
          <td>{{ user.type }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-block user__upgrade-btn"
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
            {
              username: "Hemdan",
              type: "learner",
            },
            {
              username: "Adel",
              type: "instructor",
            },
            {
              username: "Hemdan",
              type: "learner",
            },
            {
              username: "Adel",
              type: "instructor",
            },
            {
              username: "Hemdan",
              type: "learner",
            },
            {
              username: "Adel",
              type: "instructor",
            },
            {
              username: "Hemdan",
              type: "learner",
            },
            {
              username: "Adel",
              type: "instructor",
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
  margin: 80px auto;
  border: solid 3px $white-smoke;

  // To add scroll bar to the table
  table tbody {
    display: block;
    max-height: 400px;
    overflow-y: scroll;
  }
  table thead,
  table tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  .table {
    &__title {
      padding: 18px 15px;
      font-weight: 600;
      font-size: 20px;
    }

    &__header {
      background-color: $white-smoke;
      th {
        padding: 15px;
        font-weight: 600;
      }
    }

    &__row {
      border-bottom: 2px solid $white-smoke;

      .user {
        &__img {
          width: 30px;
          height: 30px;
          margin: 0 5px;
        }

        &__upgrade-btn {
          padding: 5px 10px;
          background-color: $main-color;
          color: $white;

          &:hover {
            background-color: $sub-color;
          }
        }
      }
    }
  }
}
</style>
