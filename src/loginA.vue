<template class="justify-center align-center">
  <v-app :style="appStyle">

    <v-main class="pa-0">
      <v-container class="pa-0" fluid fill-height>
        <v-spacer></v-spacer>

        <v-layout align-center justify-center>
          <v-flex xs12 sm10 md8 lg6> <!-- Adjust the width as needed -->


            <v-card tile elevation="0" height="700px" width="500px">
              <div class="pb-8 pt-16">         
                <v-slide-x-transition height="72px">

                  <v-alert width="300px" v-if="authMessageFail" class="mx-auto my-2 custom-chip"   color="#F45050" dense>
                    <span style="color: white; font-size: 12px; font-weight: 700;">{{ authMessageFail }}</span>
                  </v-alert>


                </v-slide-x-transition>

                <v-slide-x-transition>
                  <v-alert width="300px" v-if="authMessageSuccess" class="mx-auto my-2 custom-chip"  color="#1AACAC" dense>
                    <span style="color: white; font-size: 12px; font-weight: 700;">{{ authMessageSuccess }}</span>
                  </v-alert>


                </v-slide-x-transition>

                <div fluid class="mx-6 pt-12">

                  <v-img class="mx-auto my-8" src="@/assets/01a8517e9e63b0d6cec7825435a681a0.png" min-height="10px" height="auto" max-width="200px" width="fill" contain @click="navigateToNewPage"></v-img>

                </div>

                <v-form ref="formLogin" class="mx-6" @submit.prevent="submitLogin">
                  <v-card-text class="py-0 mx-auto mt-16">
                    <div class="my-6">
                    
                      <h3 style="font-size: 16px;font-weight: 700; margin-bottom: 12px;" class="text-center">Login</h3>
                      <h3 style="font-size: 12px; font-weight: 200;" class="text-center">Share with other</h3>
                    </div>

                    <div>
                      <h4 style="font-size: 10px !important; font-weight: 700;">Email</h4>

                      <v-text-field
                      single-line outlined
                      id="name" 
                      name="name"
                      v-model="email"
                      label="Enter Email"
                      required
                      dense
                      color="#394867"
                      class="custom-label-style"
                      style="font-size: 12px!important; font-weight: 400;"
                      >
                        
                      </v-text-field>
                  </div>
                  <div>
                    <h4 style="font-size: 10px!important; font-weight: 700;">Password</h4>

                    <v-text-field
                    single-line outlined
                    id="password" 
                    name="password"
                    v-model="password"
                    label="Password"
                    required
                    dense
                    color="#394867"
                    type="password"
                    class="custom-label-style"

                    style="font-size: 12px; font-weight: 400;"
                    ></v-text-field>
                  </div>

                    <v-btn elevation="0" class="mt-9" block color="#4682A9" type="submit" :loading="loadingButton" :disabled="isSubmitDisabled">
                      <span style="color: white; font-size: 10px; font-weight: 700;">Masuk</span>
                      <template v-slot:loader>
                        <v-progress-circular :width="4" :size="15" color="#91C8E4" indeterminate style="margin: 1rem;"></v-progress-circular>                      
                      </template>
                    </v-btn>
                    <v-btn elevation="0" class="my-4" block color="#394867" to="/register">
                      <span style="color: white; font-size: 10px; font-weight: 700;">Register</span>
                    </v-btn>

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
  import axios from 'axios';


  export default {
    data() {
      return {
        email: '',
        password: '',
        authMessageSuccess: '',

        authMessageFail: '',
        loadingButton: false,


        labelStyle: {
          'font-size': '16px', // Adjust the font size as needed
        },

        emailRules: [(v) => !!v || "Email is required", (v) => /.+@.+\..+/.test(v) || "Email must be valid"],
        passwordRules: [(v) => !!v || "Password is required", (v) => v.length >= 8 || "Password must be at least 8 characters"],

      };
    },
    computed: {

      isSubmitDisabled() {
        return !this.email || !this.password;
      },
      appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: '#eeeeee',

        };
      },
    },
    methods: {
      async submitLogin() {
        if (this.$refs.formLogin.validate()) {
          // Form is valid, send a POST request to authenticate
          if (this.loadingButton) {
            return;
          }
          this.authMessageSuccess = null;
          this.authMessageFail = null;
          this.loadingButton = true;

          const formData = new FormData();
          formData.append('email', this.email);
          formData.append('password', this.password);

          try {
            const loginResponse = await axios.post("https://andrewoethara.my.id/database_login.php", formData);

            if (loginResponse.data.status === 'success') {
              this.authMessageSuccess = 'Login Berhasil!';
              const userEmail = this.email; // Get the user's email
              console.log('Received email:', userEmail);

              const userDataResponse = await axios.get(`https://andrewoethara.my.id/database_user_request.php?email=${userEmail}`);

              const userData = userDataResponse.data;

              this.$store.commit('setUserData', userData);
              localStorage.setItem('userData', JSON.stringify(userData));
              

              console.log(userData);

              console.log('Is authenticated:', this.$store.getters.isAuthenticated);


              // Set the user data in Vuex store

              this.$router.push({ name: 'profil', query: { p: this.email } });
            } else {
              this.authMessageFail = "Password Salah atau Akun tidak ditemukan";
            }
          } catch (error) {
            console.log('Error', error.message);
          } finally {
            this.loadingButton = false;
          }
        }
      },
    




      navigateToNewPage() {
              window.location.href = '/';
            }

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


