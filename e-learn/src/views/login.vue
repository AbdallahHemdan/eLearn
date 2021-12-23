<template>
  <div class="container c-auth-wrapper">
    <div class="login-form">
      <form-header
        href="/signup"
        main-title="Sign in to your account"
        second-title="create your account right now"
      />

      <or-divider />

      <login-form />
    </div>
  </div>
</template>

<script>
import OrDivider from '../components/common/OrDivider/OrDivider.vue';
import FormHeader from '../components/auth/FormHeader/form-header.vue';
import LoginForm from '../components/auth/LoginForm/login-form.vue';

export default {
  name: 'Login',
  components: { FormHeader, OrDivider, LoginForm },
};
</script>

<style lang="scss" scoped>
.login-form {
  min-height: 576px;
  max-width: 28rem;
  width: 100%;
}

.c-auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
