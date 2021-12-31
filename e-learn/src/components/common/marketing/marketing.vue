<template>
  <div class="container marketing">
    <!-- Three columns of text below the hero -->
    <div class="row">
      <div class="col-lg-4">
        <img src="./../../../assets/values/1.jpg" alt="Rayan B. photo" class="mb-4" />

        <h2>Teach your way</h2>
        <div class="separator"></div>
        <p>
          “Publish the course you want, in the way you want, and always have of control your own
          content.”
        </p>
      </div>

      <div class="col-lg-4">
        <img src="./../../../assets/values/2.jpg" alt="Paulina M. photo" class="mb-4" />

        <h2>Inspire learners</h2>
        <div class="separator"></div>
        <p>
          “Teach what you know and help learners explore their interests, gain new skills, and
          advance their careers.”
        </p>
      </div>

      <div class="col-lg-4">
        <img src="./../../../assets/values/3.jpg" alt="Tristen A. photo" class="mb-4" />

        <h2>Get rewarded</h2>
        <div class="separator"></div>
        <p>
          "Expand your professional network, build your expertise, and earn money on each paid
          enrollment.”
        </p>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="recent">
      <div class="recent__title">Recent Courses</div>
      <div class="recent__sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe explicabo ipsa
        blanditiis doloribus dolor est minus.
      </div>

      <div class="row mt-lg-5">
        <recent-course
          tag-color="#433ca9"
          tag-bg-color="#e0e7ff"
          title="Boost your conversation rate"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum necessitatibus porro,"
          instructor-name="Jon Doe"
          instructor-image="svgs/avatar.svg"
          course-date="Mar 16, 2021"
        />
        <recent-course
          tag-color="#a22155"
          tag-bg-color="#fce7f3"
          title="Boost your conversation rate"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum necessitatibus porro,"
          instructor-name="Jon Doe"
          instructor-image="svgs/avatar.svg"
          course-date="Mar 16, 2021"
        />
        <recent-course
          tag-color="#086047"
          tag-bg-color="#d1fae5"
          title="Boost your conversation rate"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis placeat laborum necessitatibus porro,"
          instructor-name="Jon Doe"
          instructor-image="svgs/avatar.svg"
          course-date="Mar 16, 2021"
        />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          First featurette heading. <span class="text-muted">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          Some great placeholder content for the first featurette here. Imagine some exciting prose
          here.
        </p>
      </div>
      <div class="col-md-5">
        <img src="./../../../assets/demo/1.svg" alt="demo image" class="demo" />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span>
        </h2>
        <p class="lead">
          Another featurette? Of course. More placeholder content here to give you an idea of how
          this layout would work with some actual real-world content in place.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="./../../../assets/demo/2.svg" alt="demo image" class="demo" />
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          And lastly, this one. <span class="text-muted">Checkmate.</span>
        </h2>
        <p class="lead">
          And yes, this is the last block of representative placeholder content. Again, not really
          intended to be actually read, simply here to give you a better view of what this would
          look like with some actual content. Your content.
        </p>
      </div>
      <div class="col-md-5">
        <img src="./../../../assets/demo/3.svg" alt="demo image" class="demo" />
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
</template>

<script>
export default {
  name: 'Marketing',
  date() {
    return {};
  },
  components: {
    'recent-course': () => import('@/components/course/recent/recent.vue'),
  },
};
</script>

<style lang="scss" scoped>
@import './../hero/hero.scss';

.recent__title {
  font-size: 35px;
  font-weight: 700;
  margin-top: -30px;
}

.recent__sub-title {
  color: gray;
  margin-bottom: 24px;
}

.separator {
  background-color: $main-color;
  display: inline-block;
  height: 2px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 69px;
}

.demo {
  width: 100%;
  height: 100%;
}
</style>
