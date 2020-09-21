<template>
    <v-container
    fluid
    >
        <v-row align="center">
         <v-col v-for="item in categories" :key="item.id" align="center" cols="12" md="3">
          <!--- Barre   -->
            <h2>
              {{item.nom}}
            </h2>
            <v-container v-for="produit in item.produits" :key="produit.id"> 
            <v-skeleton-loader
             class="mx-auto"
             width="100%"
             height="150"
             type="list-item-avatar-two-line"
             :loading="load"
            >
            <v-hover>
                <template v-slot:default="{ hover }">
                <v-card
                    width="100%"
                    height="150"
                    elevation="0"
                >
                            <v-row>
                                <v-col md="5" align="start">
                                    <v-avatar
                                    class="ma-3"
                                    tile
                                    size="100"
                                    >
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col md="7" align="start">
                                    <v-card-title
                                    class="writing"
                                    v-text="produit.titre"
                                    ></v-card-title>
                                    <v-card-subtitle v-text="produit.description" class="writing1"></v-card-subtitle>
                                </v-col>
                            </v-row>
                <v-fade-transition>
                <v-overlay
                    v-if="hover"
                    absolute
                    color="primary"
                >
                    <v-btn @click="details(item,produit)" >Voir Plus d'infos</v-btn>
                </v-overlay>
                </v-fade-transition>    
              </v-card>
             </template>
           </v-hover>
           </v-skeleton-loader>
           </v-container>
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
                <v-card max-height="500px">
                    <v-container>
                        <v-row align="center">
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
                                <v-row align="center">
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
            </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                sub_categories:[],
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
        computed: {
            cats(){
                return this.$store.getters['getCategories'];
            },
            categories(){
                if(Array.isArray(this.cats)){
                  this.sub_categories = this.cats;  
                  return this.cats;
                }
                else{
                  return [];  
                }
            },
            load(){
                if(Array.isArray(this.cats)){ 
                  return false;
                }
                else{
                  return true;  
                }
            }
        },
        methods: {
            details(categ,produit) {
               var cat = this.sub_categories.indexOf(categ);
               this.editedIndex = (this.sub_categories[cat]).produits.indexOf(produit);   
               this.editedItem = Object.assign({}, (this.sub_categories[cat]).produits[this.editedIndex]); 
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
.writing{
  font-size: 16px;  
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.writing1{
  font-size: 11px;  
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>