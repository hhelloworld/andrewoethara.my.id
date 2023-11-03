<template>
  <v-dialog persistent content-class="elevation-0" overlay-opacity="1" class="card" justify="center" v-model="dialog" fluid max-width="1200px">
    <template v-slot:activator="{ on }">
      <v-btn rounded style="height: 32px; width: 100.01px;" elevation="0" dense v-on="on" color="#394867">
        <span style="color: white; font-size: 8.5px; font-weight: 700;">Add Article</span>
      </v-btn>
    </template>

    <v-card class="pa-6 card-overflow" style="border-radius: 12px; max-width: 1200px !important; max-height: 3000px;" elevation="0">
      <div>
        <span style="color: Black; font-size: 32px; font-weight: 700;">Add Article</span>
      </div>
      <v-form class="pt-4" @submit.prevent="submitPost" enctype="multipart/form-data">
        <div class="custom-div-height">
          <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Thumbnail</p>

          <v-file-input
            hide-details="true"
            single-line
            dense
            prepend-icon=""
            v-model="post.thumbnail_image"
            accept="image/*"
            color="#394867"
            outlined
            label="Upload Gambar"
            placeholder="Upload Gambar"
            :show-size="1000"
            style="font-size: 12px; font-weight: 500;"
            class="custom-label-style"
          >
            <template v-slot:selection="{ index, text }">
              <font-awesome-icon icon="images" class="px-1" size="xl" />
              <v-chip v-if="index < 2" color="#394867" dark label x-small style="font-size: 8px; font-weight: 500;"> {{ text }} </v-chip>
            </template>
          </v-file-input>
        </div>

        <!-- Title Input -->
        <div class="custom-div-height">
          <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">What's the title would be?</p>

          <v-text-field hide-details="true" single-line outlined dense color="#394867" v-model="post.title" label="Judul" required style="font-size: 12px; font-weight: 500;" class="custom-label-style"></v-text-field>
        </div>
        <div>
          <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Glance</p>

          <v-textarea
            hide-details="true"
            auto-grow
            single-line
            rows="1"
            outlined
            dense
            color="#394867"
            v-model="post.glance"
            label="Sekilas Cerita"
            required
            style="font-size: 12px; font-weight: 500;"
            class="custom-label-style"
          ></v-textarea>
        </div>
        <div class="custom-div-height-3">
          <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Write Your Story</p>

          <div v-if="editor" class="mb-4 tiptap-custom">
            <div class="py-2" style="height: fill; border-bottom-right-radius: none; border-bottom-left-radius: none; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 1px solid grey; border-bottom: hidden;">
              <v-btn-toggle background-color="white" borderless tile class="d-flex flex-wrap mx-4 my-2">

              <v-btn height="24px" type=button class="px-2 custom-button" @click="editor.chain().focus().toggleBold().run()"  :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                Bold

              </v-btn>

              <v-btn height="24px" type=button class="px-2" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Italic</span>

              </v-btn>
              <v-btn height="24px" type=button  class="px-2" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Strike</span>

              </v-btn>
              <v-btn height="24px" type=button class="px-2" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Code</span>

              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().unsetAllMarks().run()">
                <span style="color: black; font-size: 10px; font-weight: 700;">Clear Marks</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().clearNodes().run()">
                <span style="color: black; font-size: 10px; font-weight: 700;">Clear Nodes</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Paragraph</span>
              </v-btn>
              <v-btn height="24px" ype=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H1</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H2</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H3</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H4</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H5</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                <span style="color: black; font-size: 10px; font-weight: 700;">H6</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Bullet List</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Ordered List</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Code Block</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                <span style="color: black; font-size: 10px; font-weight: 700;">Blockquote</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().setHorizontalRule().run()">
                <span style="color: black; font-size: 10px; font-weight: 700;">Horizontal Rule</span>
              </v-btn>
              <v-btn height="24px" type=button class="px-2 mb-1" @click="editor.chain().focus().setHardBreak().run()">
                <span style="color: black; font-size: 10px; font-weight: 700;">Hard Break</span>
              </v-btn>
              <v-btn height="24px" type=button @click="addImage" class="px-2 mb-1">
                <span style="color: black; font-size: 10px; font-weight: 700;">Image</span>
              </v-btn>

            </v-btn-toggle>
            </div>
            
            <editor-content v-model="post.content" :editor="editor" class="px-4 py-4" style="font-size: 14px; min-height: 500px; height: fill; border: 1px solid grey; border-top: none; border-top-left-radius: none; border-top-right-radius: none; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px;" />
          </div>









        </div>

        <div class="custom-div-height-2">
          <p style="font-size: 12px; font-weight: 700; height: 20px; margin: 0;">Tags</p>

          <v-autocomplete hide-details="true" auto-grow v-model="post.tags" :items="tags" item-text="tag_name" item-value="tag_id" multiple small-chips dense clearable outlined @change="fetchTags">
            <template v-slot:selection="{ item }">
              <v-chip :key="item.tag_id" small label class="black--text font-weight-bold ma-1" style="background-color: #f8f8f8;">
                {{ item.tag_name }}
              </v-chip>
            </template>
          </v-autocomplete>
        </div>

        <!-- Buttons -->
        <div class="d-flex">
          <v-row>
            <v-col cols="12" sm="5" class="d-flex align-center">
              <v-slide-x-transition>
                <v-alert v-if="errorArticle" style="background-color: transparent;" class="ma-0" dense>
                  <span style="color: red; font-size: 12px; font-weight: 700;">{{ errorWord }}</span>
                </v-alert>
              </v-slide-x-transition>

              <v-slide-x-transition>
                <v-alert width="100%" v-if="successArticle" class="mx-auto custom-chip" color="#1AACAC" dense>
                  <span style="color: white; font-size: 12px; font-weight: 700;">{{ successDaftar }}</span>
                </v-alert>
              </v-slide-x-transition>
            </v-col>
            <v-col cols="12" sm="7" class="d-flex justify-end">
              <v-btn width="80px" style="height: 32px;" rounded @click="dialog = false" class="mt-3" color="#394867" elevation="0">
                <span style="color: white; font-size: 8.5px; font-weight: 700;">Back</span>
              </v-btn>

              <v-btn width="80px" style="height: 32px;" rounded class="mt-3 ml-5" :loading="loadingButton" type="submit" color="#4682A9" elevation="0">
                <span style="color: white; font-size: 8.5px; font-weight: 700;">Create</span>
                <template v-slot:loader>
                  <v-progress-circular :width="4" :size="15" color="#91C8E4" indeterminate style="margin: 1rem;"></v-progress-circular>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>

      <template>
        <div class="text-center">
          <v-dialog v-model="dialogSuccess" width="500">
            <v-card>
              <v-card-title class="text-center" style="color: black; font-size: 24px; font-weight: 700;">
                Success Adding Article
              </v-card-title>

              <v-card-text>
                Your Article succesfuly posted, check Home or Article menu to see your beautiful writting.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded block @click="dialogSuccess = false, dialog = false" class="mt-3" color="#394867" elevation="0">
                  <span style="color: white; font-size: 10px; font-weight: 700;">Back</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
  import axios from "axios";


  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent } from '@tiptap/vue-2'
  import Image from '@tiptap/extension-image'






  export default {
    props: {
      show: Boolean,
    },
    components: {
      EditorContent,
    },

    data() {
      return {
        dialog: false,
        successArticle: false,
        errorArticle: false,
        successWord: "",
        
        post: {
          title: "",
          glance: "",
          content: "",
          thumbnail_image: null,
          tags: [],
        },
        tags: [],
        loadingButton: false,
        dialogSuccess: false,
        editor: null,

      };
    },

    computed: {
      userProfile() {
        return this.$store.state.user;
      },
      appStyle() {
        return {
          backgroundColor: "#FFFFFF",
        };
      },
    },

    created() {
      this.fetchTags();
    },

    methods: {

      addImage() {
        const url = window.prompt('URL')

        if (url) {
          this.editor.chain().focus().setImage({ src: url }).run()
        }
      },


      fetchTags() {
        axios
          .get("https://andrewoethara.my.id/get_tags.php")
          .then((response) => {
            this.tags = response.data;
          })
          .catch((error) => {
            console.error("Error fetching tags:", error);
          });
      },

      async submitPost() {
        if (!this.editor.getJSON() || JSON.stringify(this.editor.getJSON()) === '{"type":"doc","content":[{"type":"paragraph"}]}') {
        // Show an error message or take the appropriate action
        this.errorArticle = true;
        this.errorWord = 'Write Your Story cannot be empty.'

        return;
      }
      
        this.post.content = JSON.stringify(this.editor.getJSON())

        this.loadingButton = true;
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Send the form data to the server
        const formData = new FormData();
        formData.append("author_id", this.$store.state.user.author_id);
        formData.append("title", this.post.title);
        formData.append("glance", this.post.glance);
        formData.append("content", this.post.content);
        formData.append("thumbnail_image", this.post.thumbnail_image);
        formData.append("tags", JSON.stringify(this.post.tags)); // Send tag_id values as an array

        axios
          .post("https://andrewoethara.my.id/upload_post.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.data.status === "success") {
              console.log("Article created successfully:", response.data);
              this.post.title = "";
              this.post.glance = "";
              this.post.content = "";
              this.post.thumbnail_image = null;
              this.post.tags = []; // Clear the selected tags
              this.dialogSuccess = true;

              this.dialog = false;
            } else {
              console.error("Error creating article:", response.data.message);
              this.errorArticle = true;
              this.errorWord = response.data.message;
            }
            this.loadingButton = false;
          })
          .catch((error) => {
            console.error("Error creating article:", error);
            this.loadingButton = false;
          });
      },
    },

    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Image,
        ],
      })
    },

    beforeUnmount() {
      this.editor.destroy()
    },
  };

</script>

<style scoped>
  .custom-label-style::v-deep label {
    font-size: 12px !important;
    font-weight: 500;
  }

  .custom-details-style::v-deep details {
    margin: 0px !important;
  }

  >>>.ql-container.ql-snow {
    height: 500px !important;
    border: 1px solid #ccc;
  }



  .custom-div-height {
    height: 76px;
    margin-bottom: 4px;
  }

  .custom-div-height-2 {
    height: 76px;
    margin-bottom: 4px;
  }

  .custom-div-height-3 {
    white-space: normal; /* Reset white-space to allow content to wrap */
    padding-bottom: 10px;
    height: 100%;
    margin-top: 24px;
  }

  .custom-button {
  background-color: none;
  color: black;
  font-size: 10px;
  font-weight: 700;
}

.custom-button.is-active {
  background-color: #4682A9;
  color: white;
}

</style>

<style lang="scss">

  .ProseMirror:focus {
    outline: none;
  }
  .tiptap {

  img {
    max-width: 100%;
    height: auto;
  }
  }

</style>
