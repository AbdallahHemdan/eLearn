<template>
  <div id="app" :class="{ 'app-wrapper': showNavbar }">
    <navbar v-if="showNavbar" />

    <main :class="{ container: true, 'main-wrapper': showNavbar }">
      <router-view />
    </main>

    <AppFooter v-if="showNavbar" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    navbar: () => import('@/components/common/navbar/navbar.vue'),
    AppFooter: () => import('@/components/common/AppFooter/AppFooter.vue'),
  },
  computed: {
    showNavbar() {
      return !this.$route.meta.hideNavbar;
    },
  },
};
</script>

<style lang="scss">
main {
  height: 100%;
}

.main-wrapper {
  min-height: 100vh;
  margin-top: 40px;
}

.app-wrapper {
  margin-top: 110px;
}
</style>
