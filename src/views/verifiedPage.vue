<template>
  <v-app>
    <v-container class="px-0 my-4" fluid>
      <v-layout align-center justify-center>
        <v-card elevation="0" width="1300px" fluid>
          <v-card-text class=" custom-card-text">
            <p v-if="loading">Verifying...</p>
            <p v-if="verified">Your email has been verified. You can now log in. moms</p>
            <p v-if="!verified">Invalid or expired verification link.</p>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      verified: false,
    };
  },
  mounted() {
    // Get the token from the URL
    const token = this.$route.params.token; // Use "params" to get route parameters

    // Send a request to your server to check verification status
    axios.post('https://andrewoethara.my.id/verify.php', { token })
      .then((response) => {
        if (response.data.verified) {
          // User is verified
          this.verified = true;
        }
      })
      .catch(() => {
        // Verification failed
        this.verified = false;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

