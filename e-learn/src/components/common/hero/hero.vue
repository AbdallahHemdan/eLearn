<template>
  <div class="wrapper">
    <div class="row align-items-center">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div classname="hero-content">
          <h1 class="headline">Create true business impact with us</h1>
          <div class="subheader">
            <p>
              Provide world-class training developed by leading teachers and
              universities. All on eLearn for You.
            </p>

            <div class="margin-top-md">
              <p>
                <span style="font-size: 16px"
                  >Do you to enhance your skills?
                  <a href="/courses" rel="noopener"
                    >Check out our courses</a
                  ></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="img-wrapper col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-0"
      >
        <img
          class="c-image"
          src="./../../../assets/hero.svg"
          alt="Hero image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>
<style lang="scss" scoped>
.img-wrapper {
  @media (max-width: 992px) {
    display: none;
  }
}

.wrapper {
  margin-bottom: 52px;
}
</style>
