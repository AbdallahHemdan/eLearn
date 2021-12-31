<template>
  <div class="course card mb-3">
    <div class="row g-0">
      <div class="col-md-2">
        <img
          src="http://source.unsplash.com/FHnnjk1Yj7Y"
          class="img-fluid rounded-start course__img"
          alt="course-img"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ course.name }}</h5>
          <p class="card-text">
            {{ course.syllabus }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ course.instructor }}</small>
          </p>
        </div>
      </div>
      <div class="col-md-2">
        <button
          class="btn btn-block course__enroll-btn"
          @click.prevent="enroll(course.courseId)"
          v-if="userInfo.type != 'instructor' && !course.isEnrolled"
        >
          Enroll
        </button>
        <router-link :to="`/course/${course.courseId}`">
          <button
            class="btn btn-block course__view-btn"
            v-if="userInfo.type != 'instructor' && course.isEnrolled"
          >
            View
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getUserInfo } from "@/utilities/user";

export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      userInfo: "",
    };
  },
  mounted() {
    this.setUserInfo();
  },
  methods: {
    setUserInfo() {
      this.userInfo = getUserInfo();
    },
    enroll(courseID) {
      axios
        .post(`${base}/courses`, {
          username: this.userInfo.username,
          courseId: courseID,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.course {
  height: 156px;
  border: 1px solid $lighter-gray;
  margin: 5px 0;
  &__img {
    margin: 10px;
    max-height: 180px;
    max-width: 180px;
  }
  &__enroll-btn {
    padding: 10px 20px;
    background-color: $main-color;
    color: $white;
    margin-top: 60px;

    &:hover {
      background-color: $sub-color;
    }
  }

  &__view-btn {
    padding: 10px 20px;
    background-color: $light-gray;
    color: $black;
    margin-top: 60px;

    &:hover {
      background-color: $lighter-gray;
    }
  }
}
</style>
