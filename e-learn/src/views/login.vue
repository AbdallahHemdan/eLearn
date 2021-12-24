<template>
  <div class="container auth">
    <div class="auth__wrapper">
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
export default {
  name: 'Login',
  components: {
    LoginForm: () => import('@/components/auth/LoginForm/login-form.vue'),
    OrDivider: () => import('@/components/common/OrDivider/OrDivider.vue'),
    FormHeader: () => import('@/components/auth/FormHeader/form-header.vue'),
  },
};
</script>
