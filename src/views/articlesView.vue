<template>
  <v-container :style="appStyle" fluid class="pa-0 custom-router">
    <v-row class="custom-div d-sm-flex flex-sm-row px-3 mb-12 justify-center ">
      <v-card
        v-for="article in articles"
        :key="article.id"
        tile
        :style="appStyle"
        class="pr-lg-6 pa-6"
        max-width="400px"
        min-height="740px"
        max-height="2000px"
        elevation="0"
        align-center
        justify-center
      >
        <v-img
          :aspect-ratio="16/9"
          elevation="0"
          min-width="50px"
          max-width="420px"
          min-height="300px"
          max-height="420px"
          :src="`https://andrewoethara.my.id/img/${article.thumbnail_image}`"
        ></v-img>

        <div width="100%" height="100%" fluid class="pt-4 pb-2">
          <p class="text-uppercase" style="margin: 0px; font-size: 18px; font-weight: 700;">
            {{ article.title }}
          </p>
        </div>

        <div width="100%" fluid height="100%" class="mb-8">
          <p style="font-size: 14px; font-weight: 500;">{{ article.glance }}</p>
        </div>

        <div width="100%" fluid class="py-2">
          <v-btn
            class="bottom-component"
            rounded
            color="#4682A9"
            elevation="0"
            dense
            @click="readFullArticle(article.slug)"
            height="32px"
          >
            <span style="color: white; font-size: 8.5px; font-weight: 700;">Read</span>
          </v-btn>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      articles: [],
    };
  },
  computed: {
    appStyle() {
      return {
        backgroundColor: "#FFFFFF",
      };
    },
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    readFullArticle(slug) {
      this.$router.push({ name: 'reading', params: { slug } });
    },
    async fetchArticles() {
      try {
        const response = await axios.get("https://andrewoethara.my.id/get_post.php");
        this.articles = response.data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
  },
};
</script>
<style type="text/css" scoped>

  /*.bottom-component {
    position: absolute;
    bottom: 0;
    width: 24px;
    margin-bottom: 24px;
  }*/

  .custom-router{
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0px;
    justify-content: center !important;

    @media screen and (max-width: 600px) {


    }

  }
  


</style>