<template>
  <div class="home">
    <carousel />
    <marketing />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    carousel: () => import('@/components/common/carousel/carousel.vue'),
    marketing: () => import('@/components/common/marketing/marketing.vue'),
  },
};
</script>
