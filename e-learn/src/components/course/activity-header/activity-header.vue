<template>
  <div class="activity__header">
    <div class="instructor">
      <img src="@/assets/svgs/avatar.svg" alt="instructor image" class="instructor__image" />
      <div class="activity">
        <div class="instructor__name">
          <!-- {{ instructorName }} -->
          John Doe
        </div>

        <div class="activity__date">
          <!-- {{ new Date(date).toDateString() }} -->
          {{ new Date('2021-01-01').toDateString() }}
        </div>
      </div>
    </div>

    <div class="activity__title">
      <span class="title__arrow">➤ </span>

      <!-- <span class="title__content">{{ title }}</span> -->
      <span class="title__content">Introduction to developer trends 2022</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityHeader',
  props: {
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    instructorName: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.activity__header {
  margin-bottom: 16px;
}

.instructor {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &__image {
    width: 50px;
    height: 50px;
    margin-right: 16px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
  }
}

.activity {
  &__date {
    font-size: 14px;
    font-weight: 600;
    color: $dark-gray;
    margin-top: -4px;
  }
}

.title__arrow {
  color: $main-color;
}

.title__content {
  text-decoration: underline;
}
</style>
