<template>
  <div class="manage-container">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col" class="table__title">Users</th>
        </tr>
      </thead>
      <thead>
        <tr class="table__headers">
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="(user, index) in users" :key="index" class="table__row user">
          <td>
            <img
              :src="`https://avatars.dicebear.com/api/initials/${user.username}.svg?background=%234f46e5`"
              alt=""
              class="user__img"
            />
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
import { getAccessToken } from "@/utilities/auth";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getAllUsers() {
      axios
        .get(`${base}/users`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    upgrade(username) {
      axios
        .put(
          `${base}/users/upgrade/${username}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          let updatedUserIdx = this.users.findIndex(
            (user) => user.username == username
          );
          if (updatedUserIdx != -1)
            this.users[updatedUserIdx].type = "instructor";
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

    &__headers {
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
          border-radius: 30px;
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
