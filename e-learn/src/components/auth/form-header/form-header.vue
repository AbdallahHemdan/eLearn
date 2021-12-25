<template>
  <div class="header">
    <img class="header__logo-icon" src="@/assets/logo.svg" alt="e-learn brand logo" />

    <h2 class="header__main-title">{{ mainTitle }}</h2>

    <p class="header__second-title-container">
      {{ secondTitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormHeader',
  props: {
    href: '',
    mainTitle: '',
    secondTitle: '',
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &__logo-icon {
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__main-title {
    font-weight: 800;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
  }

  &__second-title-container {
    line-height: 1.25rem;
    color: $dark-gray;
    margin-top: 0.5rem;
    text-align: center;
  }

  &__second-title {
    color: $main-color;
    text-decoration: none;
  }
}
</style>
