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
    <div v-for="(activity, index) in activities" :key="index">
      <embedded-video
        v-if="activity.type == 'youtube'"
        video-url="https://www.youtube.com/embed/watch?v=JLlIAWjvHxM"
        :title="activity.name"
        :date="activity.createdAt"
        :instructorName="instructorName"
      />
      <embedded-pdf
        v-if="activity.type == 'pdf'"
        :video-url="activity.link"
        :title="activity.name"
        :date="activity.createdAt"
        :instructorName="instructorName"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

export default {
  props: {
    courseID: {
      type: String,
      required: true,
    },
    instructorName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userInfo: "",
      activities: [],
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
    this.getActivities();
  },
  methods: {
    getActivities() {
      axios
        .get(`${base}/activities/${this.courseID}`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.activities = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
