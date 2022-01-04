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
                <create-course
                    id="myModal"
                    :instructorName="userInfo.username"
                    @createCourse="createCourse"
                />
            </div>
        </div>
        <course-card
            v-for="(course, index) in courses"
            :key="index"
            :course="course"
            @updateCourse="updateCourse"
        />
    </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

export default {
    components: {
        CourseCard: () =>
            import("@/components/course/course-card/course-card.vue"),
        CreateCourse: () =>
            import("@/components/course/create-course/create-course.vue"),
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
                .get(`${base}/courses`, {
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
        updateCourse(id) {
            let courseIdx = this.courses.findIndex(
                (course) => course._id == id
            );
            if (courseIdx != -1) this.courses[courseIdx].isEnrolled = true;
        },
        setUserInfo() {
            this.userInfo = getUserData();
        },
        createCourse(course) {
            console.log("Course: ", course);
            course.instructorName = this.userInfo.username;
            course.isEnrolled = false;
            course.date = new Date(course.createdAt)
                .toISOString()
                .split("T")[0];
            this.courses.push(course);
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
