<template>
  <div class="course">
    <!-- <div class="course__img">
      <img src="https://picsum.photos/200/300" alt="course image" />
    </div> -->

    <div class="course__data">
      <div class="course__header">
        <div class="course__info">
          <div class="course__title">{{ course.name }}</div>
          <div class="course__date">Created at {{ course.date }}</div>
        </div>
        <div class="course__instructor instructor__name">
          {{ course.instructorName }}
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <div class="course__action">
          <button
            class="btn btn-outline-secondary course__btn"
            @click.prevent="enroll()"
            v-if="
              userInfo.type != 'instructor' &&
              !course.isEnrolled &&
              course.instructorName != userInfo.username
            "
          >
            Enroll
          </button>

          <router-link :to="`/course/${course._id}`">
            <button
              class="btn btn-outline-secondary course__btn"
              v-if="
                (userInfo.type != 'instructor' && course.isEnrolled) ||
                course.instructorName == userInfo.username
              "
            >
              View
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

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
      this.userInfo = getUserData();
    },
    enroll() {
      axios
        .post(
          `${base}/users/enrollMe`,
          {
            courseId: this.course._id,
          },
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.$emit("updateCourse", this.course._id);
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
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  display: flex;
  margin-bottom: 16px;

  &__img {
    margin-right: 16px;

    @media (max-width: 768px) {
      display: none;
    }

    & > img {
      max-height: 180px;
      max-width: 180px;
    }
  }

  &__title {
    font-size: 24px;
  }

  &__date {
    font-size: 12px;
    color: gray;
  }

  &__info {
    margin-bottom: 8px;
  }

  &__description {
    color: darkslategray;
    margin-bottom: 8px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  &__data {
    display: flex;
    flex-direction: column;
  }

  &__btn {
    color: $main-color;
    border-color: $main-color;
    width: -webkit-fill-available;

    &:hover {
      background-color: $sub-color;
      color: $white;
    }
  }
}

.card-header {
  text-align: center;
}

.instructor__name {
  font-weight: 600;
  color: $main-color;
  margin-bottom: 12px;
}
</style>
