<template>
  <div class="posts">
    <div class="post" v-for="(post, index) in posts" :key="index">
      <div class="post__header">
        <img
          :src="`https://avatars.dicebear.com/api/initials/${post.username}.svg?background=%234f46e5`"
          class="user__img"
          alt="user photo"
        />

        <div class="user__info">
          <div class="user__name">{{ post.username }}</div>
          <div class="post__date">Posted on {{ post.date }}</div>
        </div>
      </div>

      <div class="post__body">{{ post.body }}</div>

      <div class="answers">
        <div
          class="answer"
          v-for="(answer, index) in post.answers"
          :key="index"
        >
          <div class="comment">
            <div class="comment__header">
              <img
                :src="`https://avatars.dicebear.com/api/initials/${answer.username}.svg?background=%234f46e5`"
                alt=""
                class="comment__usr-img"
              />

              <div class="comment__info">
                <div class="comment__usr-name">{{ answer.username }}</div>

                <div class="comment__date">Commented on {{ answer.date }}</div>
              </div>
            </div>

            <div class="comment__content">
              {{ answer.body }}
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="post__header">
          <img
            :src="`https://avatars.dicebear.com/api/initials/${post.username}.svg?background=%234f46e5`"
            class="comment__usr-img"
            alt="user photo"
          />

          <div class="comment__info">
            <div class="comment__usr-name">{{ post.username }}</div>
          </div>
        </div>

        <div class="comment__actions">
          <input
            type="text"
            v-model="newComment"
            class="form-control"
            placeholder="What do you think ?"
          />

          <button
            type="button"
            class="btn btn-outline-secondary add-comment__btn"
            @click.prevent="addComment(post._id, index)"
            :disabled="!newComment"
          >
            Comment
          </button>
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
  name: "Posts",
  props: {
    courseID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newComment: "",
      posts: [{}],
      userData: {}
    };
  },
  computed: {
    payload() {
      return {
        answer: this.newComment,
        date: new Date().toISOString().split("T")[0],
      };
    },
  },
  methods: {
    addNewCourse(newPost) {
      console.log('newPost: ', newPost)
      this.posts.push(newPost);
    },
    getPosts() {
      axios
        .get(`${base}/courses/${this.courseID}/questions`, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addComment(postId, index) {
      axios
        .post(`${base}/courses/${postId}/answers`, this.payload, {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        .then(({ data }) => {
          this.posts[index].answers.push({
            username: this.userData.username,
            date: new Date().toISOString().split("T")[0],
            body: this.newComment,
          })

          this.newComment = "";
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  created() {
    this.getPosts();
  },
  mounted() {
    this.userData = getUserData();
  },
};
</script>

<style lang="scss" scoped>
.post {
  padding: 24px 24px;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  margin-bottom: 32px;
}

.user__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: gray;
}

.post__header {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}

.user__info {
  display: flex;
  flex-direction: column;
}

.post__date {
  color: gray;
  font-size: small;
}

.post__body {
  color: $darker-gray;
  margin-bottom: 32px;
}

.comment__img-wrapper {
  width: 35px;
  height: 35px;
  padding: 4px;
  border-radius: 50%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment__img {
  width: 20px;
  height: 20px;
}

.comment__usr-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.comment {
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  padding: 12px 16px;
  margin-bottom: 16px;
}

.comment__header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.comment__usr-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}

.comment__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.comment__usr-name {
  font-weight: 600;
}

.comment__date {
  font-size: 12px;
  color: gray;
}

.add-comment__btn {
  color: $main-color;
  border-color: $main-color;
  width: -webkit-fill-available;
  margin-top: 8px;

  &:hover {
    background-color: $sub-color;
    color: $white;
  }
}

.comment__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
