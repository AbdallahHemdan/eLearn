<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Reset your password"
        second-title="back to login page"
      />

      <or-divider />

      <reset-form />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reset',
  components: {
    ResetForm: () => import('@/components/auth/ResetForm/reset-form.vue'),
    OrDivider: () => import('@/components/common/OrDivider/OrDivider.vue'),
    FormHeader: () => import('@/components/auth/FormHeader/form-header.vue'),
  },
};
</script>
