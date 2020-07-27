<template>
  <v-container>
      <v-row style="margin-left:-60px;">
        <v-col md="3">
          <!--- liste des catégorie   -->
          <categorie-component> </categorie-component>
        </v-col>
        <v-col md="9">
          <!--- Publicité principale  -->
          <add-component :height="700"></add-component>
        </v-col> 
      </v-row>
      <v-devider> </v-devider>
      <v-row align="center">
        <v-col align="center">
          <h1 class="display-1 font-weight-light primary--text mb-2">
             Nos Produits 
          </h1>
          <h2 class="font-weight-light grey--text title mb-2">
            Parmis nos meilleurs produits
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <!--- Nos Meilleur Produit  -->
        <best-component> </best-component>
      </v-row>
      <v-row>
        <!--- Publicité  -->
        <add-component :height="200"></add-component>
      </v-row>
      <v-row>
        <!--- Barre des catégories aléatoire  -->
        <bar-component> </bar-component>
      </v-row>
            <v-row>
        <!--- Publicité  -->
        <add-component :height="200"></add-component>
      </v-row>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <v-row align="center">
          <!--- Footer  -->
          <footer-component> </footer-component> 
      </v-row>
  </v-container>
</template>

<script>
import CategorieComponent from '@/components/CategorieComponent.vue';
import AddComponent from '@/components/AddComponent.vue';
import BestComponent from '@/components/BestComponent.vue';
import BarComponent from '@/components/BarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    CategorieComponent,
    AddComponent,
    BestComponent,
    BarComponent,
    FooterComponent,
  }
}
</script>
