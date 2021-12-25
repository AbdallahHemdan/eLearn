<template>
  <div class="pdf">
    <activity-header />
    <iframe class="embeddedPdf" :src="pdfUrl" title="Pdf viewer" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'EmbeddedPdf',
  props: {
    pdfUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    instructorName: {
      type: String,
      required: false,
    },
  },
  components: {
    ActivityHeader: () => import('@/components/course/activity-header/activity-header.vue'),
  },
};
</script>

<style lang="scss" scoped>
.embeddedPdf {
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 32px;
}
</style>
