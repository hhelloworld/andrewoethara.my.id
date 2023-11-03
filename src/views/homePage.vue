
<template class="justify-center align-center">
  <v-app src="common.js"  >
    <div class="custom-bar d-flex flex-row align-center" color="white" elevation="0">

      <div>
        <v-img class="mx-lg-6 mx-sm-0" src="@/assets/01a8517e9e63b0d6cec7825435a681a0.png" min-height="100px" height="100%" max-width="150px" width="fill" contain></v-img>
      </div>
      
      <v-spacer></v-spacer>

      <div>
        <resp width="500px" class="mr-lg-6 mr-sm-0" />
      </div>

    </div>

    <v-main :style="appStyle" class="custom-router" height="100%">
      <router-view class="custom-router" v-if="familyTreePage" />
      <router-view class="custom-router" v-if="articlesPage" />
      <router-view class="custom-router" v-if="profilPage" />
      <router-view class="custom-router" v-if="readingPage" />
      <router-view class="custom-router" v-if="editProfilePage" />



      <v-container :style="appStyle" fluid v-if ="homePage" class="pa-0 custom-router">
        <div class="d-sm-flex flex-sm-row justify-center">
            <v-card tile :style="appStyle" class="pr-lg-6 pa-6" min-width="50px" width="100%" max-width="800px" min-height="740px" max-height="2000px" elevation="0" align-center justify-center v-for="article in randomArticles" :key="article.id">

              <div>
                <v-img :aspect-ratio="16/9" elevation="0" min-width="50px" max-width="800px" min-height="300px" max-height="600px" :src="'https://andrewoethara.my.id/img/' + article.thumbnail_image"></v-img>
              </div>
              

              <div width="100%" height="100%" fluid class="pt-4 pb-2">
                <p class="text-uppercase" style="margin: 0px; font-size: 18px; font-weight: 700;">
                  {{ article.title }}
                </p>
              </div>

              <div width="100%" fluid height="100%" class="mb-8"> 
                <p style="font-size: 14px; font-weight: 500;"> {{ article.glance }}</p>

              </div>
             
              <div width="100%" fluid class="py-2">
                
                <v-btn style="height: 32px;" class="bottom-component" rounded color="#4682A9" elevation="0" dense @click="readFullArticle(article.slug)">                
                  <span style="color: white; font-size: 8.5px; font-weight: 700;">Read</span>
                </v-btn>
              </div>
            </v-card>
        </div>

      </v-container>

    </v-main>
  </v-app>
</template>

<script>
  import resp from "../views/responsiveNav.vue";
  import axios from "axios";



  export default {
    
    name: "App",
    components: {
      resp,
    },
    data() {
      return {
        articles: [],
        thumbnailImageFileNames: [],
      };
    },

    computed: {
      randomArticles() {
        // Shuffle the 'articles' array and return the first three items
        const shuffledArticles = this.shuffleArray(this.articles);
        return shuffledArticles.slice(0, 3);
      },

      familyTreePage() {
        return this.$route.path === "/Family-Tree";
      },

      articlesPage() {
        return this.$route.path === "/Articles";
      },

      profilPage() {
        return this.$route.path === "/Profil";
      },

      

      postingPage() {
        return this.$route.path === "/add_post";
      },

      homePage() {
        return this.$route.path === "/";
      },

      readingPage() {
        return this.$route.name === "reading";
      },

      editProfilePage() {
        return this.$route.path === "/Edit";
      },


      appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: "#FFFFFF",
        };
      },
    },

    mounted() {
      this.fetchArticles();
    },

    created() {
      document.title = 'My Blog';
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute("content", "Embark on an inspirational journey through our carefully curated blog, where we explore the world's wonders, share stories of triumph, and offer insights that empower you to lead a life filled with purpose and creativity. Join our community of dreamers, doers, and visionaries, and let the magic of inspiration ignite your soul. Your path to a brighter tomorrow begins here.");
      }
    },



    methods: {

      shuffleArray(array) {
        // Fisher-Yates shuffle algorithm to shuffle an array
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },

      readFullArticle(slug) {

      this.$router.push({ name: 'reading', params: { slug } });


      },  

      async fetchArticles() {
        try {
          const response = await axios.get("https://andrewoethara.my.id/get_post.php");
          this.articles = response.data;
          this.thumbnailImageFileNames = response.data.map((article) => article.thumbnail_image);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      },
    },
  };
</script>

<style>

  ::-webkit-scrollbar {
    display: none;
  }

  .custom-bar {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center !important;
    gap: 250px;

    @media (max-width: 1200px) {
      padding-left: 24px;
      padding-right: 24px;
      gap: 0;
      overflow-x: false;

    }
  }

  /*.bottom-component {
    position: absolute;
    bottom: 0;
    width: 24px;
    margin-bottom: 24px;
    margin-top: 24px;
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
