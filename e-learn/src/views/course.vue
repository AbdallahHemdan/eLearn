<template>
    <div class="course">
        <div class="jumbotron jumbotron-fluid">
            <div class="course__header">
                <div class="header__titles">
                    <h1 class="header__main-title display-4">
                        Boost your skills in
                    </h1>
                    <h1 class="header__sub-title display-4">
                        {{ courseInfo.name }}
                    </h1>
                </div>
                <div class="card-header">Syllabus</div>
                <ul class="list-group list-group-flush">
                    <li
                        class="list-group-item"
                        v-for="(item, index) in courseInfo.syllabus"
                        :key="index"
                    >
                        {{ index + 1 }}. {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="course__instructor">
            <div class="row">
                <div class="col left-col">
                    <div class="dummy-title">Meet our instructor</div>
                </div>
                <div class="col instructor">
                    <img
                        :src="`https://avatars.dicebear.com/api/initials/${courseInfo.instructorName}.svg?background=%234f46e5`"
                        alt="the instructor image"
                        class="instructor__image"
                    />
                    <div class="instructor__info">
                        <div class="instructor__name">
                            {{ courseInfo.instructorName }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: !this.isQA }"
                    @click="setToActivities"
                    >Activities</a
                >
            </li>

            <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: this.isQA }"
                    @click="setToQA"
                    >Q & A</a
                >
            </li>
        </ul>

        <div class="mt-4">
            <QA v-if="isQA" :courseID="courseID" />
            <Activities
                v-else
                :courseID="courseID"
                :instructorName="courseInfo.instructorName"
            />
        </div>

        <hr class="featurette-divider" />
    </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

export default {
    name: "Course",
    data() {
        return {
            isQA: false,
            instructorName: "",
            instructorTitle: "",
            userInfo: {},
            userImage: "",
            courseID: null,
            courseInfo: {},
        };
    },
    methods: {
        setToQA() {
            this.isQA = true;
        },
        setToActivities() {
            this.isQA = false;
        },
        setUserInfo() {
            this.userInfo = getUserData();
            this.userImage = `https://avatars.dicebear.com/api/initials/${"hemdan"}.svg?background=%234f46e5`;
        },
        getCourseInfo() {
            axios
                .get(`${base}/courses/${this.courseID}`, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                })
                .then((response) => {
                    this.courseInfo = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    components: {
        QA: () => import("@/components/course/qa/qa.vue"),
        Activities: () =>
            import("@/components/course/activities/activities.vue"),
    },
    created() {
        this.setUserInfo();
        this.courseID = this.$route.params.id;
        this.getCourseInfo();
    },
};
</script>

<style lang="scss" scoped>
.header__titles {
    font-size: 3.75rem;
    line-height: 1;
    color: rgba(17, 24, 39, 1);
    letter-spacing: 0.025em;
    font-weight: 800;
    font-family: fantasy;
}

.header__main-title {
    margin-bottom: 0;
}

.header__sub-title {
    color: $main-color;
}

.jumbotron {
    margin-bottom: $spacing-9x;
}

.instructor {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 8px 24px;
}

.dummy-title {
    font-size: 32px;
    font-weight: 600;
}

.instructor__name {
    font-size: 24px;
    font-weight: 600;
}

.instructor__title {
    font-weight: 600;
    color: $main-color;
}

.left-col {
    display: flex;
    align-items: center;
}

.left-col,
.right-col {
    margin-bottom: 20px;
}

.instructor__image {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 100%;
}

.nav-item {
    &:hover {
        cursor: pointer;
    }
}

.sub-dummy-title {
    color: $dark-gray;
}

.featurette-divider {
    margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}
</style>
