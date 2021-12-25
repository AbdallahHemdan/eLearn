<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Reset your password"
        second-title="Please enter your password twice in order to reset it."
      />

      <reset-form />

      <or-divider />

      <div class="auth__footer">
        <span class="auth__footer-title">Have an account?</span>

        <a class="auth__link" href="/login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reset',
  components: {
    ResetForm: () => import('@/components/auth/reset-form/reset-form.vue'),
    OrDivider: () => import('@/components/common/or-divider/or-divider.vue'),
    FormHeader: () => import('@/components/auth/form-header/form-header.vue'),
  },
};
</script>
