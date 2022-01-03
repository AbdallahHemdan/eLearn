<template>
  <div class="col recent">
    <div class="tag" :style="`color:${tagColor};background-color:${tagBgColor};`">Course</div>

    <div class="course__title">{{ title }}</div>

    <div class="instructor">
      <img :src="`https://avatars.dicebear.com/api/initials/${instructorName}.svg?background=%234f46e5`" class="instructor__image" />

      <div class="instructor__info">
        <div class="instructor__name">{{ instructorName }}</div>
        <div class="course__date">{{ courseDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentCourse',
  props: {
    tagColor: {
      type: String,
    },
    tagBgColor: {
      type: String,
    },
    title: {
      type: String,
    },
    instructorName: {
      type: String,
    },
    instructorImage: {
      type: String,
    },
    courseDate: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  background-color: #e0e7ff;
  color: #433ca9;
  font-weight: 600;
  width: fit-content;
  padding: 0px 14px;
  border-radius: 16px;
  margin-bottom: 24px;
}

.course__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.instructor__image {
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: 100%;
}

.instructor {
  display: flex;
  align-items: center;
}

.instructor__name {
  font-weight: 700;
}

.course__date {
  color: $dark-gray;
}

.recent {
  margin-bottom: 4rem;
}
</style>
