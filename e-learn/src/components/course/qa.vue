<template>
  <div class="container">
    <div class="new-question">
      <img src="./../../assets/svgs/avatar.svg" alt="user image" class="user__image" />
      <button class="post" @click="openModal">What is on your mind?</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QA',
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
  align-items: center;
}

.user__image {
  width: 50px;
  height: 50px;
  margin-right: 16px;
}

.post {
  border: none;
  width: 100%;
  height: 50px;
  background-color: transparent;
  text-align: start;
}
</style>
