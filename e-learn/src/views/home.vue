<template>
  <div class="home">
    <hero />

    <aside
      class="banner-thin section--light-blue padding-top-md padding-bottom-md"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>
              <span style="font-weight: 400; color: gray">
                Discovering new skills driving growth in your career path </span
              ><a href="/courses" rel="noopener"
                ><span style="font-weight: 400"
                  >Check new skills right now!</span
                ></a
              >
            </p>
          </div>
        </div>
      </div>
    </aside>

    <marketing />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    hero: () => import("@/components/common/hero/hero.vue"),
    marketing: () => import("@/components/common/marketing/marketing.vue"),
  },
};
</script>

<style lang="scss" scoped>
.banner-thin {
  text-align: center;
  font-size: 16px;
  padding: 4px 0;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
}

p {
  margin: 0;
}
.section--light-blue {
  background-color: #ebf3ff;
}
</style>
