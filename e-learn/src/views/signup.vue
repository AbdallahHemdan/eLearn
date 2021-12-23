<template>
  <div class="container c-auth-wrapper">
    <div class="signup-form">
      <form-header
        href="/login"
        main-title="Create a new account"
        second-title="already have an account ?"
      />

      <or-divider />

      <signup-form />
    </div>
  </div>
</template>

<script>
import OrDivider from '../components/common/OrDivider/OrDivider.vue';
import FormHeader from '../components/auth/FormHeader/form-header.vue';
import SignupForm from '../components/auth/SingupForm/signup-form.vue';

export default {
  name: 'Signup',
  components: { FormHeader, OrDivider, SignupForm },
};
</script>

<style lang="scss" scoped>
.signup-form {
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
