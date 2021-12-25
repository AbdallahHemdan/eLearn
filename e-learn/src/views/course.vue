<template>
  <div class="course container">
    <div class="jumbotron jumbotron-fluid">
      <div class="course__header">
        <div class="header__titles">
          <h1 class="header__main-title display-4">The Course name is</h1>
          <h1 class="header__sub-title display-4">{{ name }}</h1>
        </div>
        <p class="lead">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="course__instructor">
      <div class="row">
        <div class="col left-col">
          <div class="dummy-title">Meet our instructor</div>
          <div class="sub-dummy-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sit molestiae rerum sequi
            adipisci necessitatibus aspernatur officia maxime amet neque?
          </div>
        </div>
        <div class="col instructor">
          <img
            src="@/assets/svgs/avatar.svg"
            alt="the instructor image"
            class="instructor__image"
          />
          <div class="instructor__info">
            <div class="instructor__name">{{ instructorName }}</div>
            <div class="instructor__title">{{ instructorTitle }}</div>
          </div>
        </div>
      </div>
    </div>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: this.isQA }" @click="setToQA">Q & A</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: !this.isQA }" @click="setToActivities">Activities</a>
      </li>
    </ul>

    <div class="mt-4">
      <QA v-if="isQA" />
      <Activities v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data() {
    return {
      name: 'online education',
      description: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua ad non deserunt lorem cupidatat
          commodo.`,
      isQA: true,
      instructorName: 'John Doe',
      instructorTitle: 'Englist Instructor at AUC',
    };
  },
  methods: {
    setToQA() {
      this.isQA = true;
    },
    setToActivities() {
      this.isQA = false;
    },
  },
  components: {
    QA: () => import('@/components/course/qa.vue'),
    Activities: () => import('@/components/course/activities.vue'),
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

.left-col,
.right-col {
  margin-bottom: 20px;
}

.instructor__image {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.nav-item {
  &:hover {
    cursor: pointer;
  }
}

.sub-dummy-title {
  color: $dark-gray;
}
</style>
