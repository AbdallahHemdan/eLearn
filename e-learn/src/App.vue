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
    AppFooter: () => import('@/components/common/app-footer/app-footer.vue'),
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

.app-wrapper {
  margin-top: 110px;
}
</style>
