<template>
  <footer class="container footer">
    <div class="row">
      <div class="col-12 col-md d-flex justify-content-center align-items-center">
        <a href="/"><img src="@/assets/logo.svg" alt="e-learn logo" class="logo" /></a>
        <small class="d-block text-muted">&copy; 2017–2021</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
<style lang="scss" scoped>
.logo {
  width: 35px;
  height: 35px;
  margin-right: 8px;
}

.footer {
  margin: 30px auto;
}
</style>
