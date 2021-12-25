<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white custom-nav">
    <div class="container">
      <a class="navbar-brand brand-name" href="/">
        <img src="@/assets/logo.svg" class="logo" alt="e-learn logo" /> e-learn
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <div class="right-part custom-nav__options-list">
          <a
            class="custom-nav__item"
            v-for="(feature, index) in features"
            :key="index"
            :href="feature.href"
            :title="feature.title"
          >
            <img
              class="custom-nav__icon"
              :title="feature.title"
              :src="feature.imgSrc"
              :alt="feature.title"
            />
          </a>
          <profile-dropdown></profile-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      features: [
        {
          href: '/',
          title: 'Home',
          imgSrc: require('@/assets/nav/home.png'),
        },
        {
          href: '/courses',
          title: 'Courses',
          imgSrc: require('@/assets/nav/menu.png'),
        },
        {
          href: '/my-courses',
          title: 'My Courses',
          imgSrc: require('@/assets/nav/check.png'),
        },
      ],
    };
  },
  components: {
    'profile-dropdown': () => import('@/components/common/profile-dropdown/profile-dropdown.vue'),
  },
};
</script>

<style lang="scss" scoped>
.navbar-collapse {
  flex-grow: 0;
}

[aria-expanded='true'] .navbar-toggler-icon {
  background-image: url('./../../../assets/svgs/close.svg');
}

.logo {
  width: 35px;
  height: 35px;
}

@import './navbar.scss';
</style>
