<template>
  <v-app>

      <v-container fluid>
          <v-card class="py-6 text-center" elevation="0" :style="appStyle" color="white" fluid>
                <v-img max-width="150px" aspect-ratio="1" min-width="50px" v-if="userProfile" :src="userProfile.profile_picture_path" class="mx-auto"></v-img>
                <div class=" my-12">
                  <p style="font-size: 28px !important; font-weight: 700; color: #212121" contain v-if="userProfile" class="text-center">{{ userProfile.name}}</p>

                  <p style="font-size: 14px !important; font-weight: 500; color: #616161" v-if="userProfile" class="text-center">{{ userProfile.email }}</p>

                  <p style="margin-left: auto; margin-right: auto; max-width: 500px; font-size: 12px !important; font-weight: 300; color: #616161" v-if="userProfile" class="text-center">{{ userProfile.about_me }}</p>
                  
                </div>
          <div class="d-flex justify-center">

              <postingPage  />
                
              <v-btn class="ml-4" rounded style="height: 32px;" width="100.01px" elevation="0" color="#4682A9" to="/Edit">
                <span style="color: white; font-size: 8.5px; font-weight: 700;">Edit Profil</span>
              </v-btn>

              
          </div>
          </v-card>
      </v-container>


  </v-app>
</template>

<script>
  import axios from "axios";
  import postingPage from "../views/postingPage.vue";

  export default {
    components: {
      postingPage,
    },
    data() {
      return {
        showOverlay: false

      };
    },

    computed: {

      editProfil(){
        return this.$route.path === "/Edit";

      },

      userProfile() {
        return this.$store.state.user;
      },

      appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: "#EEEEEE",
        };
      },
      
    },

    methods: {


      logout() {
        // Clear user data in the Vuex store
        this.$store.commit("clearUserData");

        // Redirect the user to the login page
        this.$router.push({ name: "login" });
      },

      getUserData(email) {
        // Make an API request to fetch user data based on the email
        axios
          .get(`https://andrewoethara.my.id/database_user_request.php?email=${email}`)
          .then((response) => {
            const userData = response.data; // Assign the API response to userProfile
            console.log(userData); // Log received data

            this.$store.commit("setUserData", userData); // Set the user data in the Vuex store

            // Now that the user data is set in the store, you can use it as needed.
          })
          .catch((error) => {
            console.error(error);
          });
      },

      
    },
  };
</script>

