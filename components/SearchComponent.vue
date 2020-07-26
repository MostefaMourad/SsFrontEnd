<template>
   <div>
     <v-row>
          <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Rechercher un produit"
          class="hidden-sm-and-down"
          width="100%"
        ></v-text-field>
     </v-row>
   </div>
</template>

<script>
    export default {
      data() {
        return {
          search: ""
        }
      },
        
    }
</script>

<style scoped>

</style>