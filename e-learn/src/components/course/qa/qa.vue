<template>
  <div class="qa__wrapper">
    <div class="new-question">
      <div class="question">
        <img
          :src="`https://avatars.dicebear.com/api/initials/${userInfo.firstName}.svg?background=%234f46e5`"
          alt="user image"
          class="user__image"
        />

        <div class="question__content">
          <textarea
            name="question"
            class="form-control"
            id="question"
            placeholder="What is on your mind?"
            v-model="question"
          />
          <div class="actions">
            <button
              type="button"
              class="btn btn-outline-secondary post__btn"
              :disabled="!question"
              @click.prevent="post"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
    <posts 
    :courseID="courseID"
    ref="postsComponent"
    />
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken, getUserData } from "@/utilities/auth";

export default {
  name: "QA",
  props: {
    courseID: {
      type: String,
      required: true,
      default: ""
    },
  },
  data() {
    return {
      question: "",
      userInfo: {},
    };
  },
  mounted() {
    this.userInfo = getUserData()
  },
  computed: {
    payload() {
      return {
        question: this.question,
        date: new Date().toISOString().split("T")[0],
        courserId: this.courseID,
      };
    },
  },
  components: {
    posts: () => import("@/components/course/posts/posts.vue"),
  },
  methods: {
    openModal() {
      console.log("Open Modal");
    },
    post() {
      axios
        .post(`${base}/courses/${this.courseID}/questions`, this.payload, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then(({ data }) => {
          this.newComment = "";
          this.$refs.postsComponent.addNewCourse({
            username: this.userInfo.username,
            body: this.question,
            date: new Date().toISOString().split("T")[0],
          });
          this.question = "";
        })
        .catch((err) => {
          console.log(err);
        });

    },
  },
};
</script>

<style lang="scss" scoped>
.new-question {
  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.user__image {
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: 100%;
}

.post {
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 50px;
  text-align: start;
  background-color: #f0f2f547;
  border-radius: 16px;
  color: gray;

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

.question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.question__content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.actions {
  margin-top: 8px;
}
</style>
