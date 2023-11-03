<template>

  <v-container class="my-4 pa-0" overflow="hidden">

    <div class="justify-center pa-5">
      <p class="font-weight-bold text-center m2gin" width="50%">Family Tree</p>
      <h3 class="font-weight-bold text-center m2gin">Pomparan Op. Jaksa Juda Hutasoit / Sinta Mauli br. Siregar         
      </h3>
      <p class="text-center m2gin">
        Silsilah hubungan/relationship atau garis keturunan dari Op. Jaksa Juda Hutasoit / Sinta Mauli br. Siregar         
      </p>
    </div>

      <!-- <div class="text-center d-flex justify-center">
      <v-checkbox class="mx-2" hide-details dense v-model="checkbox1"  @click="toggleGeneration(2)" label="Generasi 2"  >Generasi 2</v-checkbox>

      <v-checkbox class="mx-2" hide-details dense v-model="checkbox2" :disabled="!checkbox1"  @click="toggleGeneration(3)" label="Generasi 3"></v-checkbox>

      <v-checkbox class="mx-2" hide-details dense v-model="checkbox3" :disabled="!checkbox1 || !checkbox2"  @click="toggleGeneration(4)" label="Generasi 4" ></v-checkbox>
    </div> -->

    <VueFamilyTree class="vue-family-tree pa-0" :tree="filteredTree" @card-click="dialog == true">

      <template v-if="customCard" v-slot:card="{item}">
        <div>
          <div class="custom-card">
            <div  :style="{backgroundImage: item.image ? `url(${item.image})` :  null}" class="custom-card__image" />
            <div  class="custom-card__info mr-5">
              <div class="custom-card__name">
                {{ item.name }}
              </div>
              <div v-show="item.age"  class="custom-card__age">
                Age: {{ item.age }}
              </div>
              <div v-show="item.status"  class="custom-card__age">
                Status: {{ item.status }}
              </div>
              <div class="mt-1"> <v-btn class="font" dense elevation="0" x-small color="blue lighten-1 white--text" v-show="item.action" @click="performAction(item.action)" style="font-weight: bold;">{{getButtonText(item.action)}}</v-btn> </div>
            </div>
            <v-btn text small width="100px" max-width="24px">
              <font-awesome-icon class="mx-1" icon="arrow-up-right-from-square" size="lg" :style="{ color: '#0084ff' }" />
            </v-btn>


          </div>
        </div>
      </template>
    </VueFamilyTree>
  </v-container>


</template>



<script>
  import VueFamilyTree from "../components/vuefamilytrees.vue";

  // import judahutasoit from '../assets/Juda-Hutasoit.jpg'
  // import sintamauli from '../assets/Sinta-Mauli.jpg'
  // import nichole from '../assets/nichole.jpeg'
  // import asri from '../assets/asri.jpeg'
  // import rachel from '../assets/rachel.jpeg'
  // import maria from '../assets/maria.jpeg'
  // import charles from '../assets/charles.jpeg'
  // import obor from '../assets/obor.jpeg'
  // import arnold from '../assets/arnold.jpeg'
  // import nora from '../assets/nora.jpeg'

  // import toti from '../assets/totti.jpeg'
  // import elsa from '../assets/elsa.jpeg'
  // import richard from '../assets/richard.jpeg'
  // import pretty from '../assets/pretty.jpeg'
  // import sidabutar from '../assets/sidabutar.jpeg'
  // import maell from '../assets/maell.jpeg'
  // import sibuea from '../assets/sibuea.jpeg'
  // import nelson from '../assets/nelson.jpeg'
  // import rugun from '../assets/rugun.jpeg'
  // import andrew from '../assets/andrew.jpeg'
  // import posmelita from '../assets/posmelita.jpeg'
  // import tumpal from '../assets/tumpal.jpeg'
  // import miranda from '../assets/miranda.png'
  // import hanny from '../assets/hanny.png'
  // import ruth from '../assets/ruth.png'
  // import julian from '../assets/julian.png'
  // import ranisa from '../assets/ranisa.png'
  // import jonathan from '../assets/jonathan.png'
  // import polin from '../assets/polin.jpeg'
  // import mopul from '../assets/mopul.jpeg'










  export default {
    name: 'familyTree',
    components: {    
      VueFamilyTree,
    },

    data() {
      return {
        customCard: true,
        dialog: false,
        showGeneration: {
          1: true,
          2: true,
          3: false,
          4: true,
          13: false,
          22: false,
          33: false,
          45: false,
          64: false,
          78: false,

        },

        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
        buttonTextMap: {
          action1: "Lihat Anak",
          action2: "Lihat Anak",
          action3: "Lihat Anak",
          action4: "Lihat Anak",
          action6: "Lihat Anak",
          action7: "Lihat Anak",
          action8: "Lihat Anak",
        // Add more mappings as needed
      },
      buttonStates:{},
      // tree: [{
      //   "id": '1',
      //   "firstPerson": {
      //     "name": "Jaksa Juda Hutasoit",
      //     "image": [judahutasoit],
      //     "status": "deceased",
      //     "age": "86"
      //   },
      //   "secondPerson": {
      //     "name": "Sinta Mauli br. Siregar",
      //     "image": [sintamauli],
      //     "status": "deceased",
      //     "age": "84"
      //   },
      //   "children": [{
      //     "id": "2",
      //     "firstPerson": {
      //       "name": "Mangatas Hutasoit",
      //       "image": "",
      //       "status": "deceased",
      //       "age": "79",
      //       action: "action8"

      //     },
      //     "secondPerson": {
      //       "name": "Rugun br. Naibaho ",
      //       "image": [rugun],
      //       "status": "deceased",
      //       "age": "81"

      //     },
      //     "children": [{
      //       "id": "3",
      //       "firstPerson": {
      //         "name": "Nelly Perak H. br. Hutasoit",
      //         "image": "",
      //         "status": "alive",
      //         "age": "81",
      //       },
      //       "secondPerson": {
      //         "name": "P. Sagala",
      //         "image": [polin],
      //         "status": "deceased",
      //         "age": "81",
      //         action: "action1"

      //       },
      //       "children": [{
      //         "id": "13",
      //         "firstPerson": {
      //           "name": "Mopul Sagala",
      //           "image": [mopul],
      //           "status": "alive",
      //           "age": "37",
      //         },

      //         "secondPerson": {
      //           "name": "Eka",
      //           "image": "",
      //           "status": "alive",
      //           "age": "34",

      //         }
      //       },
      //       {
      //         "id": "13",
      //         "firstPerson": {
      //           "name": "Rachel Carolina br. Sagala",
      //           "image": [rachel],
      //           "status": "alive",
      //           "age": "37",

      //         }
      //       }
      //       ]
      //     },
      //     {
      //       "id": "3",
      //       "firstPerson": {
      //         "name": "Nelson Hutasoit",
      //         "image": [nelson],
      //         "status": "deceased",
      //         "age": "81",
      //         "anak": "true",
      //         action: "action2"

      //       },
      //       "secondPerson": {
      //         "name": "Frida br. Sipahutar",
      //         "image": "",
      //         "status": "deceased",
      //         "age": "79"
      //       },
      //       "children": [{
      //         "id": "22",
      //         "firstPerson": {
      //           "name": "Asrida br. Hutasoit",
      //           "image": [asri],
      //           "status": "alive",
      //           "age": "30"
      //         }
      //       },
      //       {
      //         "id": "22",
      //         "secondPerson": {
      //           "name": "Maria br. Hutasoit",
      //           "image": [maria],
      //           "status": "alive",
      //           "age": "28"
      //         }
      //       }
      //       ]
      //     },
      //     {
      //       "id": "3",
      //       "firstPerson": {
      //         "name": "Ellen br. Hutasoit",
      //         "image": [obor],
      //         "status": "alive",
      //         "age": "70"
      //       },
      //       "secondPerson": {
      //         "name": "M. Sibuea",
      //         "image": [sibuea],
      //         "status": "deceased",
      //         "age": "76",
      //         action: "action3"

      //       },
      //       "children": [{
      //         "id": "33",

      //         "firstPerson": {
      //           "name": "Ellsa br. Sibuea",
      //           "image": [elsa],
      //           "status": "alive",
      //           "age": "30"
      //         },
      //         "secondPerson": {
      //           "name": "Richard Sinabariba",
      //           "image": [richard],
      //           "status": "alive",
      //           "age": "30"
      //         }
      //       },
      //       {
      //         "id": "33",
      //         "firstPerson": {
      //           "name": "Maell Rizky Sibuea",
      //           "image": [maell],
      //           "status": "alive",
      //           "age": "28"
      //         }
      //       }
      //       ]
      //     },
      //     {
      //       "id": "3",

      //       "firstPerson": {
      //         "name": "Tumpal hutasoit",
      //         "image": [tumpal],
      //         "status": "alive",
      //         "age": "74",
      //         action: "action4"

      //       },
      //       "secondPerson": {
      //         "name": "Posmelita br. Sinaga",
      //         "image": [posmelita],
      //         "status": "alive",
      //         "age": "72"
      //       },
      //       "children": [{
      //         "id": "45",
      //         "firstPerson": {
      //           "name": "Angel br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "20"
      //         }
      //       },
      //       {
      //         "id": "45",

      //         "firstPerson": {
      //           "name": "Anggraeni br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "18"
      //         }
      //       },
      //       {
      //         "id": "45",
      //         "firstPerson": {
      //           "name": "Jou Marito br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "16 "
      //         }
      //       },
      //       {
      //         "id": "45",
      //         "firstPerson": {
      //           "name": "Putri br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "16 "
      //         }
      //       },
      //       {
      //         "id": "45",
      //         "firstPerson": {
      //           "name": "Mauro br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "16 "
      //         }
      //       },
      //       ]
      //     },
      //     {
      //       "id": "3",

      //       "firstPerson": {
      //         "name": "Ferry Hutasoit",
      //         "image": "",
      //         "status": "deceased",
      //         "age": "56"
      //       }
      //     },
      //     {
      //       "id": "3",
      //       "firstPerson": {
      //         "name": "Nora br. Hutasoit",
      //         "image": [nora],
      //         "status": "alive",
      //         "age": "54"
      //       },
      //       "secondPerson": {
      //         "name": "Carles Samosir",
      //         "image": [charles],
      //         "status": "alive",
      //         "age": "55",
      //         action: "action6"
      //       },
      //       "children": [{
      //         "id": "64",

      //         "firstPerson": {
      //           "name": "Vania Miranda Br. Samosir",
      //           "image": [miranda],
      //           "status": "alive",
      //           "age": "25"
      //         }
      //       },
      //       {
      //         "id": "64",
      //         "firstPerson": {
      //           "name": "Andrew Oethara Rungguan Samosir",
      //           "image": [andrew],
      //           "status": "alive",
      //           "age": "23"

      //         }
      //       },
      //       {
      //         "id": "64",
      //         "firstPerson": {
      //           "name": "Geofry Noach Samosir",
      //           "image": [toti],
      //           "status": "alive",
      //           "age": "20"

      //         }
      //       },
      //       {
      //         "id": "64",
      //         "firstPerson": {
      //           "name": "Deang Tio Nicole br. Samosir",
      //           "image": [nichole],
      //           "status": "alive",
      //           "age": "19"

      //         }

      //       }

      //       ]
      //     },
      //     {
      //       "id": "3",
      //       "firstPerson": {
      //         "name": "Arnold Israel Hutasoit",
      //         "image": [arnold],
      //         "status": "alive",
      //         "age": "54",
      //         action: "action7"
      //       },
      //       "secondPerson": {
      //         "name": "E br. Sidabutar",
      //         "image": [sidabutar],
      //         "status": "alive",
      //         "age": "55"
      //       },
      //       "children": [{
      //         "id": "78",

      //         "firstPerson": {
      //           "name": "Hanny br. Hutasoit",
      //           "image": [hanny],
      //           "status": "alive",
      //           "age": "25"
      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Ranisa br. Hutasoit",
      //           "image": [ranisa],
      //           "status": "alive",
      //           "age": "23"

      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Julian Hutasoit",
      //           "image": [julian],
      //           "status": "alive",
      //           "age": "20"

      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Ruth br. Hutasoit",
      //           "image": [ruth],
      //           "status": "alive",
      //           "age": "19"

      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Juwita Evelin br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "19"

      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Yohana Lasmaria br. Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "19"

      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Yehuda Marlumba Hutasoit",
      //           "image": "",
      //           "status": "alive",
      //           "age": "19"
      //         }
      //       },
      //       {
      //         "id": "78",
      //         "firstPerson": {
      //           "name": "Jonathan Frizzie Hutasoit",
      //           "image": [jonathan],
      //           "status": "alive",
      //           "age": "19"

      //         }
      //       }

      //       ]
      //     },
      //     {
      //       "id": "3",

      //       "firstPerson": {
      //         "name": "Pretty br. Hutasoit",
      //         "image": [pretty],
      //         "status": "alive",
      //         "age": "51"

      //       }
      //     }
      //     ]
      //   }]
      // }],

    }
  },
  methods: {
    performAction(action) {
     switch (action) {


      case "action1":
      this.toggleGeneration(13);
          this.toggleButtonState(action);
          break;
          case "action2":
          this.toggleGeneration(22);
          break;
          case "action3":
          this.toggleGeneration(33);
          this.toggleButtonState(action);
          break;
          case "action4":
          this.toggleGeneration(45);
          this.toggleButtonState(action);
          break;
          case "action6":
          this.toggleGeneration(64);
          this.toggleButtonState(action);
          break;
          case "action7":
          this.toggleGeneration(78);
          this.toggleButtonState(action);
          break;
          case "action8":
          this.toggleGeneration(3);
          this.toggleButtonState(action);
          break;
        }
      },
      getButtonText(action) {
        // Retrieve the button text based on the action
        return this.buttonStates[action] ? 'Tutup' : this.buttonTextMap[action] || 'Click me';
      },
      toggleButtonState(action) {
        // Toggle the button state (change the button text)
        this.buttonStates[action] = !this.buttonStates[action];
      },

      toggleGeneration(generation) {
        // Toggle the visibility of the specified generation
        this.showGeneration[generation] = !this.showGeneration[generation];
      },
      
      filterTreeByGeneration(tree, showGeneration) {
        // Recursive function to filter tree data based on showGeneration
        return tree.map((item) => {
          const newItem = { ...item };
          if (showGeneration[item.id]) {
            // If the generation should be shown, include this item
            if (item.children && item.children.length > 0) {
              // Recursively filter children
              newItem.children = this.filterTreeByGeneration(item.children, showGeneration);
            }
          } else {
            // If the generation should be hidden, remove this item
            newItem.hide = true;
          }
          return newItem;
        }).filter(item => !item.hide);
      },
    },
    computed: {
      filteredTree() {
        return this.$store.state.tree, this.filterTreeByGeneration(this.$store.state.tree, this.showGeneration);
      },

    },

  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 12px;

    margin-top: 0px;
    padding-top: 0px;
    overflow: hidden !important; // hide vertical
  }

  .text-center {
    text-align: center;
    margin-bottom: 32px;
  }

  .custom-card {
    display: flex;
    align-items: center;
    width: auto;
    min-width: 250px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0 1px 2px rgba(#000, 0);
    transition: box-shadow .2s ease;
    &:hover {
      box-shadow: 0 0 8px 2px rgba(#000, .1);
    }
    &__image {
      flex: 0 0 auto;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #dedede;
      background-size: cover;
      background-position: 50%;
    }
    &__info {
      padding-left: 16px;

    }
    &__name {
      font-weight: 550;
      font-size: 12px;

    }
    &__age {
      margin-top: 4px;
      font-size: 12px;
    }
  }
  .vue-family-tree > div{
    position: absolute;
    max-width: 125px; 
    width: 100%;
    height: 100%;
    margin-top: 48px;
    margin-bottom: 24px;

    
  }

  
  .m2gin {
    margin-bottom: 12px !important;
  }




  .v-input {
    max-width: 15px  !important;
    width: 100%;
    height: 24px;

    border: none;
    border-radius: 16px;
    justify-content: center !important;



    &__control{
      width: 150px !important;
      height: 24px;

      justify-content: center;

    }

    &__slot {
      width: 120px;
      min-height: 32px !important;
      font-size: 12px;
    }
  }

  .font{
    font-size: 8px !important;
  }



</style>
