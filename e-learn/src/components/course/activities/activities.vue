<template>
  <div>
    <div
      class="col mb-4 create-activity__wrapper"
      v-if="userInfo.username === instructorName"
    >
      <button
        type="button"
        class="btn add-activity-btn"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Activity
      </button>
      <add-activity
        id="myModal"
        :courseID="courseID"
        @addNewActivity="addNewActivity"
      />
    </div>
    <div v-for="(activity, index) in activities" :key="index">
      <embedded-video
        v-if="activity.type == 'youtube'"
        :video-url="activity.link"
        :title="activity.name"
        :date="activity.createdAt"
        :instructorName="instructorName"
      />
      <embedded-pdf
        v-if="activity.type == 'pdf'"
        :pdf-url="activity.link"
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
      default: "",
    },
    instructorName: {
      type: String,
      required: true,
      default: "",
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
    addNewActivity(activity) {
      activity.instructorName = this.userInfo.username;
      activity.link = `https://www.youtube.com/embed/${this.formatLink(
        activity.link
      )}`;
      this.activities.push(activity);
    },
    formatLink(url) {
      let indexOfToken = url.indexOf("=");
      let indexOfDelimiter_1 = url.indexOf("?", indexOfToken);
      indexOfDelimiter_1 =
        indexOfDelimiter_1 === -1 ? url.length : indexOfDelimiter_1;

      let indexOfDelimiter_2 = url.indexOf("&", indexOfToken);
      indexOfDelimiter_2 =
        indexOfDelimiter_2 === -1 ? url.length : indexOfDelimiter_2;
      let indexOfSeparator = Math.min(indexOfDelimiter_1, indexOfDelimiter_2);

      return url.substring(indexOfToken + 1, indexOfSeparator);
    },
    getActivities() {
      axios
        .get(`${base}/activities/${this.courseID}`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.activities = response.data;
          this.activities.forEach((activity, index) => {
            if (
              activity.type == "youtube" &&
              activity.link.indexOf("embed") == -1
            ) {
              activity.link = `https://www.youtube.com/embed/${this.formatLink(
                activity.link
              )}`;
            }

            this.activities[index] = activity;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-activity-btn {
  background-color: $main-color;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: $sub-color;
    cursor: pointer;
  }
}

.create-activity__wrapper {
  display: flex;
  justify-content: end;
}
</style>
