<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Forgot your password ?"
        second-title="Don't worry! Just fill in your email and we'll send you a link to reset your password."
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
    ForgotForm: () => import('@/components/auth/forgot-form/forgot-form.vue'),
    OrDivider: () => import('@/components/common/or-divider/or-divider.vue'),
    FormHeader: () => import('@/components/auth/form-header/form-header.vue'),
  },
};
</script>
