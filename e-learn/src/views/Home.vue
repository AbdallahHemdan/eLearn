<template>
  <div class="home">
    <carousel />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    carousel: () =>
      import(/* webpackChunkName: "carousel" */ '@/components/common/carousel/carousel.vue'),
  },
};
</script>
