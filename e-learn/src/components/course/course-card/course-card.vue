<template>
  <div class="course">
    <div class="course__img">
      <img src="https://picsum.photos/200/300" alt="course image" />
    </div>

    <div class="course__data">
      <div class="course__header">
        <div class="course__info">
          <div class="course__title">{{ course.name }}</div>
          <div class="course__date">Created at {{ course.date }}</div>
        </div>

        <div class="course__description">
          {{ course.syllabus }}
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <div class="course__instructor instructor__name">
          {{ course.instructor }}
        </div>

        <div class="course__action">
          <button
            class="btn btn-outline-secondary course__btn"
            @click.prevent="enroll(course.courseId)"
            v-if="userInfo.type == 'learner' && !course.isEnrolled"
          >
            Enroll
          </button>

          <router-link :to="`/course/${course.courseId}`">
            <button
              class="btn btn-outline-secondary course__btn"
              v-if="(userInfo.type == 'learner' && course.isEnrolled) || true"
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
import axios from 'axios';
import { base } from '@/utilities/api';
import { getUserInfo } from '@/utilities/user';

export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      userInfo: '',
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
        .then(response => {
          console.log(response);
        })
        .catch(error => {
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

.instructor__name {
  font-weight: 600;
  color: $main-color;
}
</style>
