<template>
  <div id="app">
    <navbar v-if="showNavbar" />

    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    navbar: () => import(/* webpackChunkName: "navbar" */ '@/components/common/navbar/navbar.vue'),
  },
  computed: {
    showNavbar() {
      return !this.$route.meta.hideNavbar;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
