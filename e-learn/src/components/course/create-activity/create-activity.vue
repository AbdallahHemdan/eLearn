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
            <input type="text" class="form-control" id="name" v-model="name" />
            <label for="name" class="input-label">Name*</label>
          </div>
          <div class="form-floating mb-3">
            <input type="url" class="form-control" id="url" v-model="url" />
            <label for="url" class="input-label">Url*</label>
          </div>
          <span class="error" v-if="errorMsg">{{ errorMsg }}</span>
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
      url: "",
      name: "",
      errorMsg: "",
      activityType: "",
    };
  },
  methods: {
    validateForm() {
      if (this.url == "" || this.activityType == "" || this.name == "") {
        this.errorMsg = "Please fill the required fields";
        return false;
      }

      if (this.activityType === "youtube" && !this.validYouTubeUrl(this.url)) {
        this.errorMsg = "Please enter a valid YouTube link";
        return false;
      }

      if (this.activityType === "pdf" && !this.validPdfUrl(this.url)) {
        this.errorMsg = "Please enter a valid Pdf link";
        return false;
      }

      return true;
    },
    addActivity() {
      if (!this.validateForm()) {
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
        .then(({ data }) => {
          this.$emit("addNewActivity", data);
          this.clearData();
          document.getElementById("close").click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validPdfUrl(url) {
      return url.endsWith(".pdf");
    },
    validYouTubeUrl(url) {
      if (url != undefined || url != "") {
        var regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return !!(match && match[2].length == 11);
      }
    },
    clearData() {
      this.url = "";
      this.name = "";
      this.activityType = "";
      this.errorMsg = "";
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
