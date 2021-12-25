<template>
  <div>
    <embedded-video video-url="https://www.youtube.com/embed/LOpFYMPXqE4" />
    <embedded-pdf pdf-url="http://www.africau.edu/images/default/sample.pdf" />
  </div>
</template>

<script>
export default {
  components: {
    embeddedVideo: () => import('@/components/course/embeddedVideo'),
    embeddedPdf: () => import('@/components/course/embeddedPdf'),
  },
};
</script>

<style lang="scss" scoped></style>
