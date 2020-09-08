<template>
  <v-container
  fluid
  >
      <v-sheet
            class="mx-auto"
            light
            >
            <v-slide-group
              v-model="model"
              center-active
              show-arrows
              max-width="850"
            >
            <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <product-component
                    class="ma-2"
                    @click="toggle"
                    v-on:open="dialog=true"
                    >
                    <v-row
                        class="fill-width"
                        align="center"
                        justify="center"
                        >
                        <v-scale-transition>
                        </v-scale-transition>
                     </v-row>
                </product-component>
            </v-slide-item>
            </v-slide-group>
        </v-sheet>
        <v-dialog v-model="dialog" persistent max-width="80%">
                <template>
                <v-btn
                    color="primary"
                    dark
                    disabled
                >
                </v-btn>
                </template>
                <v-card>
                    <v-container>
                        <v-row>
                            <v-col md="8">
                               <v-carousel hide-delimiters>
                                <v-carousel-item
                                v-for="(item,i) in product_images"
                                :key="i"
                                :src="item.src"
                                max-height="90%"
                                ></v-carousel-item>
                            </v-carousel>
                            </v-col>
                            <v-col align="center">
                                <v-row>
                                    <v-chip
                                    color="primary"
                                    x-large
                                    >
                                    {{produit.prix}} DZD
                                    </v-chip>
                                </v-row>
                                <v-row>
                                   <v-card-title
                                    v-text="produit.titre"
                                    ></v-card-title>
                                    <v-card-subtitle v-text="produit.description"></v-card-subtitle>
                                </v-row>
                                <v-spacer> </v-spacer>
                                <v-row align="center">
                                    <v-col md="4"> 
                                        <v-btn color="grey" text @click="dialog = false">Fermer</v-btn>
                                    </v-col>
                                    <v-col md="7">
                                        <v-btn
                                        color="primary"
                                        class="white--text"
                                        large
                                        @click="dialog = false"
                                        >
                                        <v-icon>mdi-cart</v-icon>
                                        Ajouter Au Panier
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-dialog>
  </v-container>
</template>


<script>
import ProductComponent from '@/components/ProductComponent.vue';
    export default {
        data() {
            return {
                model: null,
                dialog:false,
                produit:{
                    titre:"Téléphone fixe Panasonic KX-TG1711",
                    prix:3600,
                    description:"Répertoire 50 noms - Horloge réveil sur le combiné - Écran rétroéclairé facile a lire - Finition anti traces de doigt - Vente en gros disponible - Livraison sur Alger gratuite / livraison hors wilaya (payante) - Produit avec garantie"
                },
                product_images: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
        components: {
            ProductComponent,
        },

    }
</script>

<style scoped>

</style>