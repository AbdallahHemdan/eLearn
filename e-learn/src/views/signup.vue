<template>
  <div class="container auth">
    <div class="auth__wrapper">
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
