<template>
  <div class="error container">
    <div class="ghost-container">
      <div class="ghost-copy">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </div>
      <div class="ghost">
        <div class="face">
          <div class="eye"></div>
          <div class="eye-right"></div>
          <div class="mouth"></div>
        </div>
      </div>
      <div class="shadow"></div>
    </div>

    <div class="error__message">
      <h1 class="error__first-message text-center">Oops!</h1>
      <h3 class="error__second-message text-center">Looks like you're lost</h3>
      <p class="error__third-message">We're sorry we couldn't find the page you're looking for.</p>
    </div>

    <div class="error__cta-container">
      <button class="error__back" @click="directToHome">Back to Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    directToHome: function () {
      window.location = '/';
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ededed;
$gray: #bfc0c0;
$dark: #585959;
$light: #d3deea;

.error {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-top: 32px;
  color: $main-color;
  text-align: center;

  &__img {
    max-width: 150px;
    display: grid;
    margin: 50px auto 40px;
    width: 100%;
    height: auto;

    @media (max-width: 48em) {
      max-width: 100px;
    }
  }

  &__first-message {
    color: $main-color;
    font-weight: 500;
  }

  &__second-message {
    font-size: 28px;
    margin-top: 0px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #707070;
  }

  &__third-message {
    color: $darker-gray;
  }

  &__cta-container {
    margin: 2rem auto 0;
    text-align: center;
  }

  &__back {
    border: 3px solid transparent;
    background-color: $main-color;
    border-radius: 6px;
    color: $white;
    padding: 5px 15px;
    font-size: 20px;

    &:hover {
      background-color: $sub-color;
    }
  }
}

.container {
  padding-left: 0;
  padding-right: 0;
}

.ghost-container {
  margin: 0 auto;
  position: relative;
  width: 350px;
  height: 350px;
}

.ghost {
  width: 50%;
  height: 53%;
  left: 25%;
  top: 10%;
  position: absolute;
  border-radius: 50% 50% 0 0;
  background: $white;
  border: 1px solid $gray;
  border-bottom: none;
  animation: float 2s ease-out infinite;
}

.ghost-copy {
  width: 50%;
  height: 53%;
  left: 25%;
  top: 10%;
  position: absolute;
  border-radius: 50% 50% 0 0;
  background: $white;
  border: 1px solid $gray;
  border-bottom: none;
  animation: float 2s ease-out infinite;
  z-index: 0;
}

.face {
  position: absolute;
  width: 100%;
  height: 60%;
  top: 20%;
}
.eye,
.eye-right {
  position: absolute;
  background: $dark;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 40%;
}

.eye {
  left: 25%;
}
.eye-right {
  right: 25%;
}

.mouth {
  position: absolute;
  top: 50%;
  left: 45%;
  width: 10px;
  height: 10px;
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent $dark $dark transparent;
  transform: rotate(45deg);
}

.one,
.two,
.three,
.four {
  position: absolute;
  background: $white;
  top: 90%;
  width: 25%;
  height: 23%;
  border: 1px solid $gray;
  z-index: 0;
}

.one {
  border-radius: 0 0 100% 30%;
  left: -1px;
}

.two {
  left: 23%;
  border-radius: 0 0 50% 50%;
}

.three {
  left: 50%;
  border-radius: 0 0 50% 50%;
}

.four {
  left: 75.5%;
  border-radius: 0 0 30% 100%;
}

.shadow {
  position: absolute;
  width: 30%;
  height: 7%;
  background: $gray;
  left: 35%;
  top: 80%;
  border-radius: 50%;
  animation: scale 2s infinite;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float {
  50% {
    transform: translateY(15px);
  }
}

.bottom {
  margin-top: 10px;
}
</style>
