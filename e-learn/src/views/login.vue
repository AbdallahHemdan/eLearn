<template>
  <div class="container auth">
    <div class="auth__wrapper">
      <form-header
        href="/signup"
        main-title="Sign in to your account"
        second-title="Sign In into e-learn to learn, ask and share your thoughts with others."
      />

      <login-form />

      <or-divider />

      <div class="auth__footer">
        <span class="auth__footer-title">Don't have an account?</span>

        <a class="auth__link" href="/signup">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
    LoginForm: () => import('@/components/auth/login-form/login-form.vue'),
    OrDivider: () => import('@/components/common/or-divider/or-divider.vue'),
    FormHeader: () => import('@/components/auth/form-header/form-header.vue'),
  },
};
</script>
