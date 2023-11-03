<template class="rounded-xl">
<v-dialog class="card" justify="center" fluid v-model="show" max-width="500px">
  <v-card class="card rounded-lg" >
    <div class="pa-5" v-if="selectedCardData">
      <img class="rounded-lg" justify="center" max-height="200px" max-width="200px" width="100%" height="100%" contain :src="selectedCardData.image" alt="Card Image" />

      <v-card-text class="d-flex flex-column">
          <h2 class="py-2">{{ selectedCardData.name }}</h2>
          <p class="py-2">Age: {{ selectedCardData.age }}</p>
          <p class="py-2">Status: {{ selectedCardData.status}}</p>


      </v-card-text>
     
      <v-card-actions class="pa-0">
        <v-btn rounded class="font" block dense elevation="0" small color="#394867" style="font-weight: bold;" @click.stop="show = false">
          <span style="color: white;">Close</span>
        </v-btn>
      </v-card-actions>
    </div>

  </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    selectedCardData: Object,  
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>
<style type="text/css" scoped>
  .card{
    overflow: hidden property !important;
  }

  .font{
    font-size: 10px !important;
  }
</style>