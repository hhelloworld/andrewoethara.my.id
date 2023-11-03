<template class="justify-center align-center">
  <v-app :style="appStyle">
    <v-main class="pa-0">
      <v-container class="pa-0" fluid fill-height>

        <v-spacer></v-spacer>

        <v-layout align-center justify-center>

          <v-flex xs12 sm10 md8 lg6>
            <v-card v-if="!isLoading" tile elevation="0" height="700px" width="500px">

              <div class="py-12">
                <v-slide-x-transition>

                      <v-alert width="300px" v-if="errorDaftar" class="mx-auto  custom-chip" color="#F45050" dense>
                        <span style="color: white; font-size: 12px; font-weight: 700;">{{ errorDaftar }}</span>
                      </v-alert>
                      

                    </v-slide-x-transition>

                    <v-slide-x-transition>
                      <v-alert width="300px" v-if="successDaftar" class="mx-auto custom-chip"  color="#1AACAC" dense>
                        <span style="color: white; font-size: 12px; font-weight: 700;">{{ successDaftar }}</span>
                      </v-alert>
                      

                    </v-slide-x-transition>
                <div fluid class="mx-6 pt-12">
                  <v-img class="mx-auto" src="@/assets/01a8517e9e63b0d6cec7825435a681a0.png" min-height="10px" height="auto" max-width="200px" width="fill" contain @click="navigateToNewPage"></v-img>
                </div>

                <v-form v-model="buttonDaftar" ref="formDataDiri" class="mx-6" @submit.prevent="submitForm">
                  <v-card-text class="py-0 mx-auto mt-16">
                    <div class="my-6">
                      <h3 style="font-size: 16px;text-align: center; font-weight: 700;" class="text-center">Daftar Pengguna</h3>
                      <h3 style="font-size: 12px; font-weight: 200;" class="text-center">Menjadi blogger bersama kami</h3>
                      

                    </div>
                    

                    <div>
                      <h4 class="custom-word" style="font-size: 10px!important; font-weight: 700;">Name</h4>

                      <v-text-field class="custom-label-style custom-details-style" single-line outlined id="name" name="name" v-model="name" label="Your Name" :rules="nameRules" required dense color="#394867" style="font-size: 12px !important; font-weight: 400; font-style: italic;">
                        
                      </v-text-field>

                    </div>
                    <div>
                      <h4 class="custom-word" style="font-size: 10px!important; font-weight: 700;">Email</h4>

                      <v-text-field class="custom-label-style" single-line outlined id="email" name="email" v-model="email" label="Your Email" :rules="emailRules" required dense color="#394867" style="font-size: 12px !important; font-weight: 400; font-style: italic;"></v-text-field>
                    </div>

                    <div>
                      <h4 class="custom-word" style="font-size: 10px!important; font-weight: 700;">Password</h4>

                      <v-text-field
                        class="custom-label-style"
                        single-line outlined
                        id="password"
                        name="password"
                        v-model="password"
                        label="Your Password"
                        :rules="passwordRules"
                        required
                        dense
                        color="#394867"
                        type="password"
                        style="font-size: 12px; font-weight: 400; font-style: italic;"
                      ></v-text-field>

                    </div>

                    <v-btn elevation="0" class="mt-9" block color="#4682A9" type="submit" :loading="loadingButton" :disabled="!buttonDaftar">
                      <span style="color: white; font-size: 10px; font-weight: 700;">Buat Akun</span>
                      <template v-slot:loader>
                        <v-progress-circular :width="4" :size="15" color="#91C8E4" indeterminate style="margin: 1rem;"></v-progress-circular>                      
                      </template>
                    </v-btn>

                    <v-btn elevation="0" class="my-4" block color="#394867" to="/login">
                      <span style="color: white; font-size: 10px; font-weight: 700;">Sudah punya Akun? Masuk Disini</span>
                    </v-btn>

                    <v-spacer></v-spacer>
                    
                  </v-card-text>
                </v-form>
              </div>
            </v-card>

            <v-card v-if="isLoading" tile elevation="0" height="700px" width="500px">
              <div class="py-12">
                <div fluid class="mx-6 my-8">
                  <v-img class="mx-auto" src="@/assets/01a8517e9e63b0d6cec7825435a681a0.png" min-height="100px" height="auto" max-width="200px" width="fill" contain @click="navigateToNewPage"></v-img>
                </div>

                <v-form class="mx-6"  >
                  <v-card-text>
                    <p style="font-size: 16px;text-align: center; font-weight: 700;" class=" mb-6 mx-auto">Memuat Form</p>
                    <v-spacer></v-spacer>
                    <div class="text-center py-8" height="366px">
                      <v-progress-circular indeterminate color="#394867"></v-progress-circular>
                    </div>

                    <v-spacer></v-spacer>
                  </v-card-text>
                </v-form>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script scoped>
  import axios from "axios";

  export default {
    data() {
      return {
        name: "",
        email: "",
        lastEmail: '',
        password: "",
        labelStyle: {
          "font-size": "16px", // Adjust the font size as needed
        },
        isLoading: true,
        loadingButton: false,
        
        formHasErrors: "",
        buttonDaftar: true,
        errorDaftar: null,
        successDaftar: null,
        nameRules: [(v) => !!v || "Name is required",   (v) => /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/.test(v) || "Valid: 'John Doe' or 'John', Invalid: 'john doe' or 'john' ",],
        emailRules: [(v) => !!v || "Email is required", (v) => /.+@.+\..+/.test(v) || "Email must be valid"],
        passwordRules: [(v) => !!v || "Password is required", (v) => v.length >= 8 || "Password must be at least 8 characters"],
      };
    },

    created() {
      // Simulate a loading delay (replace this with your actual data loading logic)
      setTimeout(() => {
        this.isLoading = false; // Hide the loading indicator and show the card
      }, 1200); // Simulating a 2-second delay
    },

    computed: {
      appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: "#F0F0F0",
        };
      },
    },
    methods: {
      isSubmitDisabled() {
        if (this.$refs.formDataDiri.validate()) {
          //form is valid
          this.formHasErrors = false;
        } else {
          //form is not valid
          this.formHasErrors = true;
        }
      },

    
      async submitForm() {

        if (this.loadingButton) {
          return;
        }
        this.errorDaftar = null;
        this.successDaftar = null;
        this.loadingButton = true;

        await new Promise(resolve => setTimeout(resolve, 1500));


        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);

        try {
          const response = await axios.post("https://andrewoethara.my.id/database_register.php", formData);

          if (response.data.status === 'success') {
            this.successDaftar = "Pendaftaran akun berhasil!";
            
          } else {
            this.errorDaftar = "Gagal mendaftar! Email telah digunakan";
              console.log(response.data.message);

          }
        } catch (error) {
            console.log(error);

          
        } finally {
          this.loadingButton = false;
        }
      },


      navigateToNewPage() {
        // Navigate to the new page with a full page refresh
        window.location.href = "/";
      },
    },
  };
</script>

<style type="text/css" scoped>
  
  .custom-chip{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  
  .custom-label-style::v-deep label {
    font-size: 12px !important;
    font-weight: 500;
  }

  .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding-top: 0;
    margin-bottom: 2px;
  }
</style>




