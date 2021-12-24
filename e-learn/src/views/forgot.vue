<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Forgot your password ?"
        second-title="Please enter your email address"
      />

      <forgot-form />

      <or-divider />

      <div class="auth__footer">
        <span class="auth__footer-title">Back to login ?</span>

        <a class="auth__link" href="/login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forgot',
  components: {
    ForgotForm: () => import('@/components/auth/ForgotForm/forgot-form.vue'),
    OrDivider: () => import('@/components/common/OrDivider/OrDivider.vue'),
    FormHeader: () => import('@/components/auth/FormHeader/form-header.vue'),
  },
};
</script>
