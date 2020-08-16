<template>
    <v-container>
        <v-row>
            <v-col align="center">
                <h1>
                   Nos Services
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="serv in services" :key="serv.service" md="3">
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                    ></v-img>

                    <v-card-title>
                    {{serv.service}}
                    </v-card-title>

                    <v-card-subtitle>
                    {{serv.prix}} DA
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog=true"
                    >
                        Détails
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="serv.show = !serv.show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="serv.show">
                        <v-divider></v-divider>

                        <v-card-text>
                            {{serv.desc}}
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
        <!-- POP-UP DETAILS--------->
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
                                        <v-icon>mdi-phone</v-icon>
                                        {{produit.numero}}
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
    export default {
        data() {
            return {
                services : [
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
                       
                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
                        
                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."

                    },
                    {
                        service:"nom service",
                        prix:"prix service",
                        show:false,
                        desc:"I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape."
                    },
                ],
                dialog:false,
                produit:{
                    titre:"Nom Service",
                    numero:"Numero Service",
                    prix:3600,
                    description:"Répertoire 50 noms - Horloge réveil sur le combiné - Écran rétroéclairé facile a lire - Finition anti traces de doigt - Vente en gros disponible - Livraison sur Alger gratuite / livraison hors wilaya (payante) - Produit avec garantie"
                },
            }
        },
    }
</script>

<style scoped>

</style>