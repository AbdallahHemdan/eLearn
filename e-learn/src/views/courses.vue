<template>
  <div class="courses-container">
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

export default {
  components: {
    CourseCard: () => import("@/components/course/course-card/course-card.vue"),
  },
  data() {
    return {
      courses: [],
      userInfo: "",
    };
  },
  methods: {
    getAllCourses() {
      axios
        .get(`${base}/courses`)
        .then((response) => {
          console.log(response);
          this.courses = response.data;
        })
        .catch((error) => {
          console.log(error);
          // TO be removed after integration with backend
          this.courses = [
            {
              courseName: "Course1",
              courseId: 13,
              isEnrolled: true,
              instructor: "John Doe",
              syllabus: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.Elit sunt amet fugiat veniam occaecat fugiat aliqua ad non deserunt lorem cupidatat commodo.`,
            },
            {
              courseName: "Course2",
              courseId: 14,
              isEnrolled: false,
              instructor: "John Doe",
              syllabus: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.Elit sunt amet fugiat veniam occaecat fugiat aliqua ad non deserunt lorem cupidatat commodo.`,
            },
          ];
        });
    },
  },
  created: function () {
    this.getAllCourses();
  },
};
</script>

<style lang="scss" scoped>
.courses-container {
  margin: 80px auto;
  padding: 10px;
  border: solid 3px $white-smoke;
  max-height: 500px;
  display: block;
  overflow-y: auto;
}
</style>
