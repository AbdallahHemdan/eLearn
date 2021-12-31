<template>
  <div class="dropdown profile-options">
    <a
      class="dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img :src="userImage" class="profile-options__img" alt="profile" />
    </a>

    <div
      class="dropdown-menu dropdown-menu-end right-dropdown"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" :href="`/settings`">
        <img
          :src="userImage"
          alt="avatar image"
          class="profile-options__icon"
        />
        Profile
      </a>
      <a class="dropdown-item" :href="`/users`" v-if="userInfo.type == 'admin'">
        <img
          src="@/assets/nav/users.png"
          alt="isers icon"
          class="profile-options__icon"
        />
        Manage Users
      </a>

      <div class="logout">
        <a class="dropdown-item" href="/login" @click="logout">
          <img
            src="@/assets/nav/logout.png"
            alt="logout icon"
            class="profile-options__icon"
          />
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { clearLocalStorage, getUserData } from "@/utilities/auth";

export default {
  name: "ProfileDropdown",
  data: function () {
    return {
      userInfo: {},
      userImage: "",
    };
  },
  methods: {
    logout() {
      clearLocalStorage();
    },
    setUserInfo() {
      this.userInfo = getUserData();
      this.userImage = `https://avatars.dicebear.com/api/initials/${this.userInfo.firstName}.svg?background=%234f46e5`;
    },
  },
  mounted() {
    this.setUserInfo();
  },
};
</script>

<style lang="scss" scoped>
.right-dropdown {
  position: absolute;
  right: 0px;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid $main-color;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

@import "@/components/common/navbar/navbar.scss";
</style>
