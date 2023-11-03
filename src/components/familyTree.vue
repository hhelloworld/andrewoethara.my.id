<template>
  <v-container :style="appStyle" fluid class="custom-container px-6 pt-16">
    <div class="pt-16">
      <p class="font-weight-bold text-center m2gin" width="50%">Family Tree</p>
      <h3 class="font-weight-bold text-center m2gin">Pomparan Op. Jaksa Juda Hutasoit / Sinta Mauli br. Siregar</h3>
      <p class="text-center m2gin">
        Silsilah hubungan/relationship atau garis keturunan dari Op. Jaksa Juda Hutasoit / Sinta Mauli br. Siregar
      </p>
    </div>

    <!-- <div class="text-center d-flex justify-center">
      <v-checkbox class="mx-2" hide-details dense v-model="checkbox1"  @click="toggleGeneration(2)" label="Generasi 2"  >Generasi 2</v-checkbox>

      <v-checkbox class="mx-2" hide-details dense v-model="checkbox2" :disabled="!checkbox1"  @click="toggleGeneration(3)" label="Generasi 3"></v-checkbox>

      <v-checkbox class="mx-2" hide-details dense v-model="checkbox3" :disabled="!checkbox1 || !checkbox2"  @click="toggleGeneration(4)" label="Generasi 4" ></v-checkbox>
    </div> -->

    <VueFamilyTree class="vue-family-tree mt-12" :tree="filteredTree" @card-click="dialog == true">
      <template v-if="customCard" v-slot:card="{item}">
        <div>
          <div class="custom-card">
            <div :style="{backgroundImage: item.image ? `url(${item.image})` :  null}" class="custom-card__image" />
            <div class="custom-card__info mr-5">
              <div class="custom-card__name">
                {{ item.name }}
              </div>
              <div v-show="item.age" class="custom-card__age">
                Age: {{ item.age }}
              </div>
              <div v-show="item.status" class="custom-card__age">
                Status: {{ item.status }}
              </div>
              <div class="mt-1">
                <v-btn class="font" dense elevation="0" x-small color="#3876BF" v-show="item.action" @click="performAction(item.action)" style="color: white;font-weight: bold;">{{getButtonText(item.action)}}</v-btn>
              </div>
            </div>
            <v-btn text x-small icon max-width="24px" @click.stop="showDetailOrangPopup(item)">
              <font-awesome-icon icon="arrow-up-right-from-square" size="lg" :style="{ color: '#3876BF' }" />
            </v-btn>
          </div>
        </div>
      </template>
    </VueFamilyTree>
    <detailOrang v-model="showDetailOrang" :selectedCardData="selectedCardData" />
  </v-container>
</template>

<script>
  import VueFamilyTree from "../components/vuefamilytrees.vue";
  import detailOrang from "../components/detailOrang.vue";

  export default {
    name: "familyTree",
    components: {
      VueFamilyTree,
      detailOrang,
    },

    data() {
      return {
        selectedCardData: null,

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
        showDetailOrang: false,

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
        buttonStates: {},
      };
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
            this.toggleButtonState(action);
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

      showDetailOrangPopup(cardData) {
        this.selectedCardData = cardData;
        this.showDetailOrang = true;
        this.selectedCardData = {
          ...cardData,
          image: cardData.image, // Replace 'image' with the actual property name
        };
        this.showDetailOrang = true;
      },

      getButtonText(action) {
        // Retrieve the button text based on the action
        return this.buttonStates[action] ? "Tutup" : this.buttonTextMap[action] || "Click me";
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
        return tree
          .map((item) => {
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
          })
          .filter((item) => !item.hide);
      },
    },
    computed: {
      filteredTree() {
        return this.$store.state.tree, this.filterTreeByGeneration(this.$store.state.tree, this.showGeneration);
      },

      appStyle() {
        return {
          // backgroundImage: `url(${require('@/assets/bg.png')})`,
          backgroundColor: "#FFFFFF",
        };
      },
    },
  };
</script>

<style lang="scss">

  .text-center {
    text-align: center;
    margin-bottom: 32px;
  }

  .custom-container {
    background-color: white;
    height: 100%;
    overflow: hidden;
  }

  .custom-card {
    display: flex;
    align-items: center;
    width: 250px;
    height: 140px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0 1px 2px rgba(#000, 0);
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 0 8px 2px rgba(#000, 0.1);
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
      width: 120px;
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

  .vue-family-tree > div {
    position: absolute;
    width: 100%;
    height: 600px;
    z-index: 0;
    padding-left: 0 auto;
    padding-right: 0 auto;

  }

  .m2gin {
    margin-bottom: 12px !important;
  }


  .font {
    font-size: 8px !important;
  }
</style>
