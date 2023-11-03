<template>
  <div>
    <div src="common.js" v-if="isSmallScreen">
      <v-btn text small class="px-0" width="24px" :ripple="false" @click="toggleMenu">
        <font-awesome-icon icon="bars" size="xl" :style="{ color: 'black' }" />

      </v-btn>
      <!-- Place your menu items here -->

      <v-navigation-drawer class="mx-auto" right fluid v-model="drawer" elevation="0" absolute temporary hide-overlay width="100%" height="1000vh">
        <v-list nav dense>
          <v-list-item-group v-model="group" class="my-9 ">
            <v-btn class="bg-transparent mx-2" block x-large  :ripple="false" plain text to="/">Home</v-btn>
          </v-list-item-group>

          <v-list-item-group v-model="group" class="my-9">
            <v-btn class="bg-transparent mx-2" block x-large :ripple="false" plain text to="/Family-Tree">Family Tree</v-btn>
          </v-list-item-group>

          <v-list-item-group v-model="group" class="my-9">
            <v-btn class="bg-transparent mx-2" block x-large  :ripple="false" plain text to="/Articles">Articles</v-btn>
          </v-list-item-group>

          <v-list-item-group class="d-flex my-9" v-model="group">
            <v-btn v-if="!userProfile" class="bg-transparent mx-2" block x-large  :ripple="false" plain text to="/login">Login</v-btn>

            <v-btn v-if="userProfile" class="bg-transparent mx-2" block x-large  :ripple="false" plain text to="/Profil">My Profil</v-btn>
          </v-list-item-group>

          <v-list-item-group>
            <v-btn v-if="userProfile" class="bg-transparent mx-2" block x-large  :ripple="false" plain text @click="logout">Logout</v-btn>
          </v-list-item-group>

        </v-list>

        

      </v-navigation-drawer>

      <!-- Add more links as needed -->
    </div>
    <div v-else class="align-center justify-center">
      <!-- Regular app bar content -->
      <v-btn class="bg-transparent mx-2" small :ripple="false" plain text to="/">Home</v-btn>
      <v-btn class="bg-transparent mx-2" small :ripple="false" plain text to="/Family-Tree">Family Tree</v-btn>
      <v-btn class="bg-transparent mx-2" small :ripple="false" plain text to="/Articles">Articles</v-btn>

      <v-btn v-if="!userProfile" class="bg-transparent mx-2" small :ripple="false" plain text to="/login">Login</v-btn>

     <!--  <v-btn v-if="userProfile" class="bg-transparent ml-2 pr-0" small :ripple="false" plain text to="/Profil">{{ userProfile.name }}</v-btn> -->

      <v-menu offset-y v-if="userProfile" flat content-class="elevation-1" left>
      <template v-slot:activator="{ on, attrs }" >
        <v-btn class="bg-transparent" small :ripple="false" plain text
          v-bind="attrs"
          v-on="on"
        >
        <v-img width="24px" height="24px" v-if="userProfile" :src="userProfile.profile_picture_path" class="rounded-circle"></v-img>
          
        </v-btn>
      </template>
      <v-list class="py-6">
        <v-list-item class="d-flex flex-row pt-2 pb-4" >
         
          
                <v-btn class="bg-transparent" small :ripple="false" plain text to="/Profil">

                <v-img aspect-ratio="1" min-width="32px" v-if="userProfile" :src="userProfile.profile_picture_path" class="rounded-circle mr-4"></v-img>

              {{ userProfile.name }}</v-btn>

        </v-list-item>

        <v-list-item-group>
            <v-btn v-if="userProfile" class="bg-transparent" block small  :ripple="false" plain text @click="logout">Logout</v-btn>
          </v-list-item-group>
      </v-list>
    </v-menu>

    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        isSmallScreen: false,
        showMenu: false,
        drawer: false,
        group: null,
      };
    },

    computed: {
      userProfile() {
        return this.$store.state.user;
      },
    },

    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },

    beforeDestroy() {
      window.removeEventListener("resize", this.checkScreenSize);
    },

    methods: {
      logout() {
        // Clear user data in the Vuex store
        this.$store.commit("clearUserData");

        // Redirect the user to the login page
        this.$router.push({ name: "login" });
      },
      async login() {
        // Your login logic here...

        try {
          const response = await axios.post("https://andrewoethara.my.id/database_register.php", {
            email: this.email,
            password: this.password,
          });

          if (response.data.status === "success") {
            this.registeredName = response.data.name; // Set the user's registered name
            // Redirect the user or update the UI as needed
            console.log("registeredName:", this.registeredName); // Log the registeredName
          } else {
            // Handle login failure
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      },

      toggleMenu() {
        this.drawer = !this.drawer;
      },
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth <= 1024; // Adjust the breakpoint as needed
      },
      navigateToNewPage() {
        // Navigate to the new page with a full page refresh
        window.location.href = "/login";
      },
    },
    watch: {
      group() {
        this.drawer = false;
      },
    },
  };
</script>

<style type="text/css" scoped>
  
.no-elevation-menu ::deep.v-menu__content {
  elevation: 4 !default;
}

.v-menu__content {
  top: 80px !important;
}

</style>


