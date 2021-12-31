<template>
  <div>
    <div class="col" v-if="userInfo.type != 'learner'">
      <button
        type="button"
        class="btn add-activity-btn"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Activity
      </button>
      <add-activity id="myModal" :courseID="courseID" />
    </div>
    <embedded-video video-url="https://www.youtube.com/embed/LOpFYMPXqE4" />
    <embedded-pdf pdf-url="http://www.africau.edu/images/default/sample.pdf" />
  </div>
</template>

<script>
import { getUserData } from "@/utilities/auth";

export default {
  props: {
    courseID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userInfo: "",
    };
  },
  components: {
    embeddedVideo: () =>
      import("@/components/course/embedded-video/embedded-video.vue"),
    embeddedPdf: () =>
      import("@/components/course/embedded-pdf/embedded-pdf.vue"),
    addActivity: () =>
      import("@/components/course/create-activity/create-activity.vue"),
  },
  created() {
    this.userInfo = getUserData();
  },
};
</script>

<style lang="scss" scoped></style>
