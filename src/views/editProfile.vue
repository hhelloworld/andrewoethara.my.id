<template>
  <div class="px-6">

    <h2>Edit Profil</h2>
    <form @submit.prevent="updateUserProfile">

      <v-row>

      <v-col cols="12" sm="3" class="pr-sm-12 px-3">

      <p class="py-8" style="font-size: 16px; font-weight: 700; height: 6px; margin: 0;">Photo Profil</p>
          <div>
              <v-img :src="displayedImage" class="mt-4 mx-auto mx-sm-0 mb-8" max-width="250px" aspect-ratio="1" min-width="50px" id="profile_picture_path" v-model="selectedImageFile"></v-img>

            <div class="custom-div-height">
              <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Upload Photo</p>
              <v-file-input
                hide-details="true"
                single-line
                dense
                prepend-icon=""
                accept="image/*"
                color="#394867"
                outlined
                label="Upload"
                placeholder="Upload"
                style="font-size: 12px; font-weight: 500;"
                class="custom-label-style"
                ref="fileInput"
                @change="onFileChange"
              >
                <template v-slot:selection="{ index, text }">
                  <font-awesome-icon icon="images" class="px-1" size="xl" />
                  <v-chip v-if="index < 2" color="#394867" dark label x-small style="font-size: 8px; font-weight: 500;">{{ text }}</v-chip>
                </template>
              </v-file-input>
            </div>
          </div>
    </v-col>


          <v-col class="custom-border pl-sm-12 px-3" cols="12" sm="9" style="height: 600px;">


      <p class="py-8" style="font-size: 16px; font-weight: 700; height: 6px; margin: 0;">Account Information</p>

      <div class="custom-div-height pt-4">
        <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Name</p>

        <v-text-field hide-details="true" single-line outlined dense color="#394867" id="name" v-model="userData.name" style="font-size: 12px; font-weight: 500;" class="custom-label-style"></v-text-field>
      </div>

      <div class="custom-div-height pt-4">
        <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Email</p>

        <v-text-field hide-details="true" single-line outlined dense color="#394867" id="email" v-model="userData.email" style="font-size: 12px; font-weight: 500;" class="custom-label-style"></v-text-field>
      </div>

      <div class="pt-4">
        <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">About Me</p>

        <v-textarea hide-details="true" rows="6" auto-grow single-line outlined dense color="#394867" id="about_me" v-model="userData.about_me" label="Tentang" style="font-size: 12px; font-weight: 500;" class="custom-label-style"></v-textarea>
      </div>

      <div class="d-flex justify-center pt-16 mt-4" height="100%">
        <v-btn style="height: 32px;" rounded type="submit"  color="#4682A9" elevation="0">
          <span style="color: white; font-size: 8.5px; font-weight: 700;">Update</span>
        </v-btn>

      </div>

    </v-col>
  </v-row>

      


    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        about_me: "",
      },
      selectedImageFile: null,
    };
  },
  computed: {
    userProfile() {
      return this.$store.state.user;
    },
    displayedImage() {
      // Use the selected image if available, otherwise use the user's profile picture from the database
      return this.selectedImageFile ? URL.createObjectURL(this.selectedImageFile) : this.userData.profile_picture_path;
    },
  },
  created() {
    // Initialize the userData with the user's data from Vuex
    this.userData = { ...this.$store.state.user };
  },
  methods: {
    updateUserProfile() {
      const formData = new FormData();
      formData.append("author_id", this.$store.state.user.author_id);

      if (this.selectedImageFile) {
        formData.append("profile_picture_path", this.selectedImageFile);
      }

      if (this.userData.name) {
        formData.append("name", this.userData.name);
      }
      if (this.userData.email) {
        formData.append("email", this.userData.email);
      }
      if (this.userData.about_me) {
        formData.append("about_me", this.userData.about_me);
      }

      // Make a POST request to update the data
      axios
        .post("https://andrewoethara.my.id/update_user_profile.php", formData)
        .then((response) => {
          // Handle the response if needed
          console.log("Data updated:", response.data);

          // Update Vuex store with the non-empty fields
          this.$store.commit("setUserData", { ...this.$store.state.user, ...this.userData, 
            ...this.selectedImageFile });


        })
        .catch((error) => {
          // Handle errors if the update fails
          console.error("Error updating data:", error);
        });
    },

    // Function to handle file input change
    onFileChange(event) {
      this.selectedImageFile = event;
    },
  },
};
</script>

<style type="text/css" scoped>
  .custom-label-style::v-deep label {
    font-size: 12px !important;
    font-weight: 500;
  }

  .custom-details-style::v-deep details {
    margin: 0px !important;
  }

  .custom-div-height {
    height: 76px;
    margin-bottom: 4px;
  }

  .custom-border{

    @media (max-width: 600px) {
      padding-left: 24px;
      padding-right: 24px;



    }
  }
</style>
