<template>
  <div class="home">
    <hero />
    <aside class="banner-thin section--light-blue padding-top-md padding-bottom-md">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>
              <span style="font-weight: 400; color: gray">
                Discover skills driving growth across 10 industries in the </span
              ><a
                href="https://www.coursera.org/skills-reports/industry?utm_campaign=isr-2021&amp;utm_content=c4b-thin-banner-isr&amp;utm_medium=website&amp;utm_source=business"
                target="_blank"
                rel="noopener"
                ><span style="font-weight: 400">Industry Skills Report 2021.</span></a
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
  name: 'Home',
  components: {
    hero: () => import('@/components/common/hero/hero.vue'),
    marketing: () => import('@/components/common/marketing/marketing.vue'),
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
