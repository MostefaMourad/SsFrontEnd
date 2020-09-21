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
                v-for="prod in products"
                :key="prod.id"
                v-slot:default="{ active, toggle }"
              >
                <product-component
                    class="ma-2"
                    @click="toggle"
                    v-on:open="details(prod)"
                    v-bind:product="prod"
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
                <v-card
                max-height="500px"
                >
                    <v-container>
                        <v-row>
                            <v-col md="6">
                               <v-carousel hide-delimiters height="300px">
                                <v-carousel-item
                                v-for="(item,i) in product_images"
                                :key="i"
                                :src="item.src"
                                max-height="300px"
                                ></v-carousel-item>
                            </v-carousel>
                            </v-col>
                            <v-col align="start">
                                    <v-row>
                                        <v-col md="8" align="start">
                                            <v-card-title
                                            v-text="editedItem.titre"
                                            color="primary"
                                            >
                                            </v-card-title>
                                            <v-card-subtitle v-text="editedItem.description">
                                            </v-card-subtitle>
                                        </v-col>
                                        <v-col md="3" align="end">
                                            <v-chip
                                            color="primary"
                                            x-large
                                            >
                                            {{editedItem.prix}} DZD
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                        <v-card-text>
                                            <h2>
                                                Caractéristiques du Produit :
                                            </h2>
                                            &nbsp;&nbsp;
                                            <h4> - <strong> Poids </strong>  : {{editedItem.poids}} ( kilogrammes ) </h4>
                                            <h4> - <strong> Couleur </strong>  : {{editedItem.couleur}}  </h4>
                                            <h4> - <strong> Longueur </strong>  : {{editedItem.longueur}} ( mètres ) </h4>
                                            <h4> - <strong> Largeur </strong> : {{editedItem.largeur}} ( mètres ) </h4>
                                            <h4> - <strong> Hauteur </strong> : {{editedItem.hauteur}} ( mètres ) </h4>
                                        </v-card-text>
                                <v-spacer> </v-spacer>
                                <v-row >
                                    <v-col md="4" align="end"> 
                                        <v-btn color="grey" text @click="close()">Fermer</v-btn>
                                    </v-col>
                                    <v-col md="7" align="end">
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
                produits:[],
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
                editedIndex:-1,
                editedItem: {
                titre:'',
                description:'',
                prix: 0,
                marque:'',
                quantite:0,
                couleur:'',
                poids:0.0,
                longueur:0.0,
                largeur:0.0,
                hauteur:0.0,
                categorie_id:0,
                sous_categorie_id:0,
                images:[],
            },
            defaultItem: {
                titre:'',
                description:'',
                prix: 0,
                marque:'',
                quantite:0,
                couleur:'',
                poids:0.0,
                longueur:0.0,
                largeur:0.0,
                hauteur:0.0,
                categorie_id:0,
                sous_categorie_id:0,
                images:[],
            },
            }
        },
        components: {
            ProductComponent,
        },
        props: {
            num: {
                type: Number,
                default:0, 
            },
        },
        computed: {
        prods(){
            if (this.num == 0) {
              return this.$store.getters['getProduitsf'];
            } else if (this.num == 1) {
              return this.$store.getters['getProduitss'];
            } else {
              return this.$store.getters['getProduitst'];
            }
        },
        products(){
            if(Array.isArray(this.prods)){
              this.produits = this.prods;  
              return this.prods;
            }
            else{
              return [];  
            }
        }
        },
        methods: {
            details(item) {
               this.editedIndex = this.produits.indexOf(item);
               this.editedItem = Object.assign({}, this.produits[this.editedIndex]); 
               this.dialog = true; 
            },
            close(){
                this.dialog = false;
                this.$nextTick(() => {
                  this.editedItem = Object.assign({}, this.defaultItem);
                  this.editedIndex = -1;
                })
            }
        },
    }
</script>

<style scoped>

</style>