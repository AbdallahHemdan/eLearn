<template>
  <div class="video">
    <activity-header
      :title="title"
      :date="date"
      :instructorName="instructorName"
    />

    <iframe
      class="embeddedVideo"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "EmbeddedVideo",
  props: {
    videoUrl: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    instructorName: {
      type: String,
      required: false,
      default: ''
    },
  },
  components: {
    ActivityHeader: () =>
      import("@/components/course/activity-header/activity-header.vue"),
  },
};
</script>

<style lang="scss" scoped>
.video {
  padding: 24px 24px 0;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  margin-bottom: 32px;
}

.embeddedVideo {
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: 32px;
}
</style>
