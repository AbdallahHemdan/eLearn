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
          <h5 class="modal-title" id="staticBackdropLabel">
            Create new Course
          </h5>
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
          <div
            class="form-floating mb-3"
            v-for="(item, index) in syllabus"
            :key="index"
          >
            <input
              type="text"
              class="form-control"
              id="description"
              v-model="item.name"
              :name="`Item+${index}`"
            />
            <label for="description" class="input-label">Syllabus Item</label>
          </div>
          <button
            type="button"
            class="btn create-btn add-syllabus-item"
            @click="addNewSyllabus"
          >
            Add Syllabus item
          </button>
          <span class="error" v-if="!fullInfo">Please enter full info</span>
          <span class="error" v-if="!success"
            >Please try different course name</span
          >
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            id="close"
            data-dismiss="modal"
            @click="clearData"
          >
            Close
          </button>
          <button type="button" class="btn create-btn" @click="createCourse">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "@/utilities/api";
import { getAccessToken } from "@/utilities/auth";

export default {
  name: "CreateCoursePopup",
  props: {
    instructorName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      courseName: "",
      syllabus: [{ name: "" }],
      fullInfo: true,
      success: true,
    };
  },
  computed: {
    hasEmptySyllabus() {
      let emptyItem = false;
      this.syllabus.forEach((item) => {
        if (!item.name) emptyItem = true;
      });

      return emptyItem;
    },
  },
  methods: {
    createCourse() {
      this.success = true;
      if (this.courseName == "" || this.hasEmptySyllabus) {
        this.fullInfo = false;
        return;
      }
      axios
        .post(
          `${base}/courses`,
          {
            name: this.courseName,
            syllabus: this.syllabus.map((item) => item.name),
          },
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          this.$emit("createCourse", response.data);
          this.clearData();
          document.getElementById("close").click();
        })
        .catch((error) => {
          console.log(error);
          this.success = false;
        });
    },
    addNewSyllabus() {
      this.syllabus.push({ name: "" });
    },
    clearData() {
      this.courseName = "";
      this.syllabus = [{ name: "" }];
      this.fullInfo = true;
      this.success = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-syllabus-item {
  width: 100%;
}
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
