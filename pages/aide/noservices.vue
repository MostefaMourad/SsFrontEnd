<template>
    <v-layout
    column
    justify-center
    align-center    
    >
    <v-container>
        <v-row>
            <v-card elevation="0">
                <v-card-title>
                    <v-col align="center" class="display-3 primary--text">
                            Nos Services
                        </v-col>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col align="left" md="3" v-for="item in items" :key="item.id">
                            <v-card flat>
                                <v-title>
                                    <v-img>
                                        
                                    </v-img>
                                </v-title>
                                <v-card-subtitle class="primary--text" style="font-size:20px;">
                                    {{item.title}}
                                </v-card-subtitle>
                                <v-card-text class="reponse">
                                    {{item.description}}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                items :[
                    {
                        id:1,
                        title:"Livraison",
                        description:"Le délais de la livraison commence à partir de la confirmation de commande, la livraison de la marchandise se fait entre deux à quatre jours, de nombreux produits sont gratuits à distribuer dans la wilaya d'Alger, frais de livraison entre 200 DA et 400 DA sur la wilaya d'Alger, la livraison sur d'autre wilaya entre 400 DA et 600 DA.",
                     /*   src:require(""), */
                    },
                    {
                        id:2,
                        title:"Garantie",
                        description:"Nos produits sont soumis à un contrôle de qualité, (la garantie est liée au fabricant)",
                      /*  src:require(""), */
                    },
                    {
                        id:3,
                        title:"Mode de paiement",
                        description:"Paiement à la livraison, Lorsque vous recevez la facture finale et après avoir revu votre commande avec notre livreur, vous pouvez payer en espèces.",
                     /*   src:require(""), */
                    },
                    {
                        id:4,
                        title:"Retour de produit",
                        description:"Si vous n'êtes pas satisfait de votre commande, vous pouvez la rendre au livreur sans payer (Les marchandises ouvertes ne peuvent être retournées qu'en cas de problème technique).",
                      /*  src:require(""), */
                    },
                ]
            }
        }
    }
</script>

<style scoped>
</style>