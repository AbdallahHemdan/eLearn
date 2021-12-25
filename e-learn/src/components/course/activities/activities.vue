<template>
  <div>
    <embedded-video video-url="https://www.youtube.com/embed/LOpFYMPXqE4" />
    <embedded-pdf pdf-url="http://www.africau.edu/images/default/sample.pdf" />
  </div>
</template>

<script>
export default {
  components: {
    embeddedVideo: () => import('@/components/course/embedded-video/embedded-video.vue'),
    embeddedPdf: () => import('@/components/course/embedded-pdf/embedded-pdf.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
