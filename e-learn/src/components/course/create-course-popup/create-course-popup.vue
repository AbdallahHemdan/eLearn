<template>
  <div
    class="modal fade"
    id="myModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    @keydown.esc="clearData"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create new Course</h5>
          <button
            type="button"
            class="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            @click="clearData"
          ></button>
        </div>
        <div class="modal-body form">
          <div class="form-floating mb-3">
            <input
              @input="fullInfo = 1"
              type="text"
              class="form-control"
              id="courseName"
              v-model="courseName"
            />
            <label for="courseName" class="input-label">Course Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              @input="fullInfo = 1"
              type="text"
              class="form-control"
              id="description"
              v-model="description"
            />
            <label for="description" class="input-label">Description</label>
          </div>
          <span class="error" v-if="!fullInfo">Please enter full info</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="clearData">
            Close
          </button>
          <button type="button" class="btn create-btn" @click="createCourse">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { base } from '@/utilities/api';

const getUserToken = () =>
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIzLCJ1c2VybmFtZSI6Ik1haGJvdWJBZGVsIiwiZW1haWwiOiJtYWhib3ViQWRlbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNpb2Roc2lkc2kiLCJmaXJzdE5hbWUiOiJBaG1lZCIsImxhc3ROYW1lIjoiQWRlbCIsImJpcnRoRGF0ZSI6IjIwMTktMDItMDIiLCJjb3Vyc2VzSWRzIjpbXSwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjQwNzI2NjE5LCJleHAiOjE2NDA4MTMwMTl9.uw-tRh2k1xt5x5oqtzcYSz2aSg2u6uHqJ7IhvhWgGZk';

export default {
  name: 'CreateCoursePopup',
  props: {
    instructorName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      courseName: '',
      description: '',
      fullInfo: true,
    };
  },
  methods: {
    createCourse() {
      if (this.courseName == '' || this.description == '') {
        this.fullInfo = false;
        return;
      }
      axios
        .post(
          `${base}/courses`,
          {
            name: this.courseName,
            syllabus: this.description,
          },
          {
            token: getUserToken(),
          },
        )
        .then(response => {
          console.log(response);
          this.clearData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearData() {
      this.courseName = '';
      this.description = '';
      this.fullInfo = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.create-btn {
  background-color: $main-color;
  color: $white;

  &:hover {
    background-color: $sub-color;
  }
}
.error {
  margin: 0 0 0 4px;
  color: red;
  font-size: 14px;
}
</style>
