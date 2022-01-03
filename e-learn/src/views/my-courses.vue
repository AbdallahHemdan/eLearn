<template>
  <div class="courses-container">
    <div class="courses-header row">
      <div class="col">
        <span class="courses-header__title">My Courses</span>
      </div>
    </div>
    <div>
      <course-card
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken } from "@/utilities/auth";

export default {
  components: {
    CourseCard: () => import("@/components/course/course-card/course-card.vue"),
  },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    getMyCourses() {
      axios
        .get(`${base}/courses/my-courses`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.courses = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    this.getMyCourses();
  },
};
</script>

<style lang="scss" scoped>
.courses-header {
  margin: 20px 0px;
  &__title {
    font-weight: 600;
    font-size: 24px;
  }

  .create-course-btn {
    float: right;
    padding: 10px 20px;
    background-color: $main-color;
    color: $white;

    &:hover {
      background-color: $sub-color;
    }
  }
}

.courses-container {
  margin: 80px auto;
  padding: 10px;
  border: solid 3px $white-smoke;
  max-height: 500px;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
