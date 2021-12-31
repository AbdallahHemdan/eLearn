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
            Create new activity
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
          <select
            class="form-select auth__user-type mb-3"
            aria-label="Default select example"
            v-model="activityType"
          >
            <option disabled value="">Select the type</option>
            <option value="pdf">PDF</option>
            <option value="youtube">Video</option>
          </select>
          <div class="form-floating mb-3">
            <input
              @input="fullInfo = 1"
              type="text"
              class="form-control"
              id="name"
              v-model="name"
            />
            <label for="name" class="input-label">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              @input="fullInfo = 1"
              type="url"
              class="form-control"
              id="url"
              v-model="url"
            />
            <label for="url" class="input-label">Url</label>
          </div>
          <span class="error" v-if="!fullInfo">Please enter full info</span>
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
          <button type="button" class="btn create-btn" @click="addActivity">
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
  name: "AddActivityPopUp",
  props: {
    courseID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fullInfo: true,
      activityType: "",
      url: "",
      name: "",
    };
  },
  methods: {
    addActivity() {
      if (this.url == "" || this.activityType == "" || this.name == "") {
        this.fullInfo = false;
        return;
      }
      axios
        .post(
          `${base}/activities/${this.courseID}`,
          {
            name: this.name,
            link: this.url,
            type: this.activityType,
          },
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.clearData();
          document.getElementById("close").click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearData() {
      this.url = "";
      this.name = "";
      this.activityType = "";
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
