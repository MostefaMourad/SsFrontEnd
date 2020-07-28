<template>
    <v-container>
        <v-row>
            <v-card
                elevation="1"
                flat
                tile
                width="100%"
                >
                <v-row align="center">
                    <v-col md="3" align="center">
                        <v-btn  outlined  color="primary">
                            Filtrer
                            <v-icon>mdi-filter-outline</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col md="6" align="center">
                        <v-row align="center">
                            <v-col md="2">
                                <h2>Prix</h2>
                            </v-col>
                            <v-col md="10"> 
                          <v-card-text>
                                <v-row>
                                    <v-col class="px-4">
                                    <v-range-slider
                                        v-model="range"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                        class="align-center"
                                    >
                                        <template v-slot:prepend>
                                        <v-text-field
                                            :value="range[0]"
                                            class="mt-0 pt-0"
                                            hide-details
                                            single-line
                                            type="number"
                                            style="width: 60px"
                                            @change="$set(range, 0, $event)"
                                        ></v-text-field>
                                        </template>
                                        <template v-slot:append>
                                        <v-text-field
                                            :value="range[1]"
                                            class="mt-0 pt-0"
                                            hide-details
                                            single-line
                                            type="number"
                                            style="width: 60px"
                                            @change="$set(range, 1, $event)"
                                        ></v-text-field>
                                        </template>
                                    </v-range-slider>
                                    </v-col>
                                </v-row>
                            </v-card-text>                                
                            </v-col>
                        </v-row>  
                    </v-col>
                    <v-col md="3" align="center">
                        <v-overflow-btn
                        class="my-2"
                        :items="filters"
                        label="Trier Par :"
                        ></v-overflow-btn>
                    </v-col>
                </v-row> 
                </v-card>
             </v-row>
              <v-row>
                  <v-row v-for="n in 4" :key="n">
                    <v-col v-for="i in 5" :key="i">
                       <product-component> </product-component>
                    </v-col> 
                  </v-row>
              </v-row>
              <v-row align="center">
                  <v-col align="center">
                   <v-pagination
                    v-model="page"
                    :length="15"
                    :total-visible="7"
                    ></v-pagination>                 
                  </v-col>
              </v-row>
                      <!-------------------  Pop détails de Produit ----------->
                <v-row justify="center">
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
                    </v-row>
    </v-container>
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue';
    export default {
        data() {
            return {
                filters: ['Les Plus Demandés', 'Prix Croissant', 'Prix Décroissant'],
                min: -50,
                max: 90,
                slider: 40,
                range: [-20, 70],
                page: 1,
                dialog: false,
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