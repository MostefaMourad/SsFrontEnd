<template>
    <v-container>
        <v-row align="center">
         <v-col v-for="item in items" :key="item.title" align="center" cols="12" md="2">
          <!--- Barre   -->
            <h2>
              {{item.title}}
            </h2>
          <v-row v-for="produit in produits" :key="produit.title" align="center">
            <v-hover>
                <template v-slot:default="{ hover }">
                <v-card
                    width="200"
                    elevation="0"
                >
                        <v-col>
                            <v-avatar
                            class="ma-3"
                            tile
                            size="100"
                            >
                            <v-img :src="produit.src"></v-img>
                            </v-avatar>
                            <v-card-title
                            v-text="produit.title"
                            ></v-card-title>
                            <v-card-subtitle v-text="produit.artist"></v-card-subtitle>
                        </v-col>
                <v-fade-transition>
                <v-overlay
                    v-if="hover"
                    absolute
                    color="primary"
                >
                    <v-btn @click="dialog = true" >Voir Plus d'infos</v-btn>
                </v-overlay>
                </v-fade-transition>    
              </v-card>
             </template>
           </v-hover>
          </v-row > 
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
    export default {
        data() {
            return {
                items: [
                    {
                      title:"Catégorie 1",
                    },
                    {
                      title:"Catégorie 2",
                    },
                    {
                      title:"Catégorie 3",
                    },
                    {
                      title:"Catégorie 4",
                    },
                    {
                      title:"Catégorie 5",
                    },
                    {
                      title:"Catégorie 6",
                    },
                ],
                produits:[
                    {
                    src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                    title: 'Supermodel',
                    artist: 'Foster the People',
                    },
                    {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'Halcyon Days',
                    artist: 'Ellie Goulding',
                    },
                    {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'titre',
                    artist: 'Ellie Goulding',
                    },
                    {
                    src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                    title: 'titre1',
                    artist: 'Ellie Goulding',
                    },
                ],
                overlay: false,
                dialog: false,
                hide:false,
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
    }
</script>

<style scoped>

</style>