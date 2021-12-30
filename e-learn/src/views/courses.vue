<template>
  <div class="courses-container">
    <div class="courses-header row">
      <div class="col">
        <span class="courses-header__title">All Courses</span>
      </div>
      <div class="col" v-if="userInfo.type != 'learner'">
        <button
          type="button"
          class="btn create-course-btn"
          data-toggle="modal"
          data-target="#myModal"
        >
          Create Course
        </button>
        <create-course id="myModal" :instructorName="userInfo.username" />
      </div>
    </div>
    <div>
      <course-card v-for="(course, index) in courses" :key="index" :course="course" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { base } from '@/utilities/api';
import { getUserInfo } from '@/utilities/user';

export default {
  components: {
    CourseCard: () => import('@/components/course/course-card/course-card.vue'),
    CreateCoursePopup: () => import('@/components/course/create-course/create-course.vue'),
  },
  data() {
    return {
      courses: [],
      userInfo: '',
    };
  },
  methods: {
    getAllCourses() {
      axios
        .get(`${base}/courses`)
        .then(response => {
          console.log(response);
          this.courses = response.data;
        })
        .catch(error => {
          console.log(error);
          // TO be removed after integration with backend
          this.courses = [
            {
              courseName: 'Course1',
              courseId: 13,
              isEnrolled: true,
              instructor: 'John Doe',
              syllabus: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.Elit sunt amet fugiat veniam occaecat fugiat aliqua ad non deserunt lorem cupidatat commodo.`,
            },
            {
              courseName: 'Course2',
              courseId: 14,
              isEnrolled: false,
              instructor: 'John Doe',
              syllabus: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.Elit sunt amet fugiat veniam occaecat fugiat aliqua ad non deserunt lorem cupidatat commodo.`,
            },
          ];
        });
    },
    setUserInfo() {
      this.userInfo = getUserInfo();
    },
  },
  created: function () {
    this.getAllCourses();
  },
  mounted() {
    this.setUserInfo();
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
