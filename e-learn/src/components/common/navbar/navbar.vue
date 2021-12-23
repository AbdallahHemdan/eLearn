<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white custom-nav">
    <div class="container">
      <a class="navbar-brand brand-name" href="/">
        <img src="@/assets/logo.svg" class="brand-icon" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-toggle-content"
        aria-controls="nav-toggle-content"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-toggle-content">
        <div class="custom-nav__options-list">
          <a
            class="custom-nav__item"
            v-for="(navItem, index) in navigation"
            :key="index"
            :href="navItem.href"
            :title="navItem.name"
          >
            {{ navItem.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
const navigation = [
  { href: '/about', name: 'Product' },
  { href: '/about', name: 'Features' },
  { href: '/about', name: 'Marketplace' },
  { href: '/about', name: 'Company' },
];

export default {
  data: function () {
    return {
      navigation,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import './navbar.scss';
</style>
