<template>
  <div class="container">
    <div class="new-question">
      <div class="question">
        <img src="@/assets/svgs/avatar.svg" alt="user image" class="user__image" />

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
  </div>
</template>

<script>
export default {
  name: 'QA',
  data() {
    return {
      question: '',
    };
  },
  methods: {
    openModal() {
      console.log('Open Modal');
    },
  },
};
</script>

<style lang="scss" scoped>
.new-question {
  padding: 8px 24px;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
  display: flex;
  flex-direction: column;
}

.user__image {
  width: 50px;
  height: 50px;
  margin-right: 16px;
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
