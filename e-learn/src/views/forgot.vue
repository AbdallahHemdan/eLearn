<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Forgot your password ?"
        second-title="back to login page"
      />

      <or-divider />

      <forgot-form />
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
