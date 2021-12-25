<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/login"
        main-title="Create a new account"
        second-title="Create a new account to learn, ask and share your thoughts with others."
      />

      <signup-form />

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
  name: 'Signup',
  components: {
    FormHeader: () => import('@/components/auth/form-header/form-header.vue'),
    OrDivider: () => import('@/components/common/or-divider/or-divider.vue'),
    SignupForm: () => import('@/components/auth/singup-form/signup-form.vue'),
  },
};
</script>
