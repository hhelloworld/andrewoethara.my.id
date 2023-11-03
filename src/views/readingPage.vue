<template>

    <v-container :style="appStyle" fluid class="custom-div">
      <v-card tile v-if="article.title" class="pa-6" height="100%" elevation="0">
        <div class="pt-6">
          <div style="color: black; font-size: 36px; font-weight: 700;" class="justify-center d-flex flex-column title-text text-center"> {{ article.title }} 
            <div class="justify-center mx-auto my-4">
            

            <div class="d-flex flex-row px-0 mr-1 label mb-2" style="width: 100%;" color="transparent">
              
              

              <div style="color: #717171; font-size: 11px; font-weight: 500;"> by: {{ article.author_name}} <span style="margin-right: 8px; margin-left: 8px"> | </span> Updated {{ formatDate(article.created_at) }} 
              </div>



            </div>

            

          </div>

          </div>

        </div>
          
          <div class="pb-6">
            <v-spacer>
            <v-img class="mx-auto custom-div" :src="'https://andrewoethara.my.id/img/' + article.thumbnail_image" alt="Thumbnail"></v-img>
            </v-spacer>

          </div>

        <div class="pt-8 custom-div" v-html="renderHTML(article.content)"></div>

           <div class="pt-8 pb-16">
            <p style="font-size: 10px; font-weight: 500; height: 20px; margin: 0;">Tags</p>

            <v-chip
              v-for="(tag, index) in article.tag_name"
              :key="index"
              class="mr-1 mt-1"
              small
              style="background-color: #f8f8f8;"
            >
              {{ tag }}
            </v-chip>
          </div>



          
      </v-card>
    </v-container>

</template>

<script>
import axios from "axios";
import moment from 'moment';
import { generateHTML } from '@tiptap/html' // Import generateHTML function
  import Document from '@tiptap/extension-document'
  import Paragraph from '@tiptap/extension-paragraph'
  import Text from '@tiptap/extension-text'
  import Bold from '@tiptap/extension-bold'
  import Image from '@tiptap/extension-image'
  import ListItem from '@tiptap/extension-list-item'
  import BulletList from '@tiptap/extension-bullet-list'
  import HardBreak from '@tiptap/extension-hard-break'
  import Heading from '@tiptap/extension-heading'












export default {
  components:{
  },
  data() {

    return {
      article: {}, // Initialize with an empty object
    };
  },

  computed: {

    userData() {
      return this.$store.state.user; // Replace with your actual store property
    },


    appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: "#EEEEEE",
        };
      },
  },

  mounted() {
    // Select the iframe element
    const iframe = document.querySelector('.pt-8 iframe');

    if (iframe) {
      // Apply styles to center the iframe
      iframe.style.display = 'block';
      iframe.style.margin = '0 auto';
      iframe.style.textAlign = 'center';
      iframe.style.maxWidth = '100%';
    }
  },




  


  created() {
    const slug = this.$route.params.slug;

    axios
      .get(`https://andrewoethara.my.id/get_post.php?slug=${slug}`)
      .then((response) => {
        this.article = response.data;

        // Dynamically set the page title
        document.title = this.article.title;

        // Dynamically set the meta description
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
          metaDescriptionTag.setAttribute('content', this.article.glance);
        }

        console.log('article:', slug);
      })
      .catch((error) => {
        console.error('Error fetching article details:', error);
      });
  },



  methods: {
    formatDate(timestamp) {
      // Use moment.js to format the timestamp as an Indonesian date
      return moment(timestamp).format('D MMMM YYYY'); // Example format
    },

    renderHTML(content) {
      // Ensure content is valid JSON
      if (content) {
        try {
          const jsonContent = JSON.parse(content);

          // Render HTML from JSON
          return generateHTML(jsonContent, [
            Document,
            Paragraph,
            Text,
            Bold,
            Image,
            ListItem,
            BulletList,
            HardBreak,
            Heading
            // Add other Tiptap extensions as needed
          ]);
        } catch (error) {
          console.error('Error parsing content:', error);
        }
      }
      return ''; // Return an empty string if content is not available or parsing fails
    },
  },


};
</script>

<style scoped>

    .custom-div >>> img {
      width: 100%;
      height: auto;
      padding-top: 24px;
      padding-bottom: 24px;
      
    }



    iframe[src*="pinterest.com"] {
    display: block;
    margin: 0 auto;
    text-align: center;
    }

    iframe[src*="pinterest.com"] {
      max-width: 100%;
    }

  
</style>


