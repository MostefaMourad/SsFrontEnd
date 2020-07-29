<template>
    <v-card elevation-1>
        <v-container>
        <v-card-title>
            <v-row align="center">
                <v-col md="1">
                    <v-btn icon large @click="$router.push('/client/profil/commandes')"><v-icon>mdi-arrow-left</v-icon></v-btn>
                </v-col>
                <v-col md="10" align="center">
                    <h2>
                        Détails de la commande
                    </h2>
                </v-col>
            </v-row>
        </v-card-title>
        <v-divider> </v-divider>
        <v-card-text>
        <v-row>
            <v-col>
                <h3>Commande n° {{commande}}</h3>
                <h3 class="font-weight-light grey--text">
                {{articles}} articles
                </h3>
                <h3 class="font-weight-light grey--text">
                Placée le {{date}}
                </h3>
                <h3 class="font-weight-light grey--text">
                    Total : {{total}}
                </h3>
            </v-col>
        </v-row>
        <v-divider> </v-divider>
        <v-row>
            <v-col>
            <h2 class="font-weight-light grey--text">
                ARTICLES DANS VOTRE COMMANDE
            </h2> 
            <v-card outlined>
                <v-card-title>
                   Statut : <span class="primary--text" > {{etat}} </span>
                </v-card-title>
                 <v-divider> </v-divider>
                <v-card-text>
                <v-container>
                    <v-row v-for="n in articles" :key="n">
                        <v-container>
                            <v-row>
                            <v-col md="4">
                                    <v-img src="https://picsum.photos/510/300?random"></v-img>
                            </v-col>
                            <v-col md="8">
                                <v-row>
                                <h2>
                                    {{produit.titre}} 
                                </h2>
                                &nbsp;
                                </v-row>
                                <v-row>
                                    <h3 class="font-weight-light primary--text">
                                    Prix : {{produit.prix}}
                                    </h3>
                                </v-row>
                                <v-row>
                                    <h3 class="font-weight-light grey--text">
                                        Quantité : {{produit.quantite}}
                                    </h3>
                                </v-row>
                            </v-col>
                                <v-divider> </v-divider>
                            </v-row>
                        </v-container>
                    </v-row>
                </v-container>
                </v-card-text>
                 <v-divider> </v-divider>
                <v-card-actions>
                    <v-container>
                    <v-row align="center">
                        <v-col md="8">
                            <v-row align="center">
                                <v-icon>
                                    mdi-truck
                                </v-icon>
                                &nbsp;&nbsp;
                                <h3>
                                    Livré entre le dimanche 16 août et le dimanche 23 août
                                </h3>
                            </v-row>
                        </v-col>
                        <v-col md="4">
                            <v-row>
                               <v-btn text color="primary"> ANNULER LA COMMANDE </v-btn>
                            </v-row>
                        </v-col>
                    </v-row>                          
                    </v-container>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col align="center">
                <v-card outlined>
                    <v-card-title>
                    PAIEMENT
                    </v-card-title>
                    <v-divider :inset="inset"></v-divider>
                    <v-card-text>
                        <v-row>
                            <v-card-title>
                            Méthode de paiement
                            </v-card-title>
                            <v-card-subtitle>
                                Paiement à la livraison
                            </v-card-subtitle>
                        </v-row>
                    <v-row align="center">
                        <v-col align="left" >
                        <v-card-title>
                            Détails du paiement
                        </v-card-title>
                        <v-card-subtitle>
                            <h4 class="grey--text">
                              Sous-total :{{produit.prix*articles}} DA
                            </h4>
                            <h4 class="grey--text">
                                Frais de Livraison :{{livraison}} DA
                            </h4>
                            <h4 class="grey--text">
                                Total : {{produit.prix*articles+livraison}} DA
                            </h4>
                        </v-card-subtitle>                           
                        </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col align="center">
                <v-card outlined>
                    <v-card-title>
                    LIVRAISON
                    </v-card-title>
                    <v-divider :inset="inset"></v-divider>
                    <v-card-text>
                        <v-row>
                            <v-card-title>
                            Méthode de livraison
                            </v-card-title>
                            <v-card-subtitle>
                            Livraison standard
                            </v-card-subtitle>
                        </v-row>
                        <v-row>
                            <v-col align="left" >
                            <v-card-title>
                                Adresse de livraison
                            </v-card-title>
                            <v-card-subtitle>
                                <h4 class="grey--text">
                                {{firstname+" "+lastname}}
                                </h4>
                                <h4 class="grey--text">
                                {{adress}}
                                </h4>
                                <h4 class="grey--text">
                                {{ville+", "+region}}
                                </h4>
                            </v-card-subtitle> 
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-row>
            <v-col align="center">
                <v-btn text color="primary"> BESOIN D'AIDE ?</v-btn>
            </v-col>
        </v-row> 
        </v-card-actions>
       </v-container>
    </v-card>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
                commande:"11111542",
                inset:false,
                articles:3,
                livraison:1420,
                total:1400,
                firstname:"MOURAD",
                lastname:"MOSTEFA",
                adress:"Chorfa 327,BLOCK R17",
                region:"Chlef",
                ville:"Chlef",
                date:"29-07-2020",
                etat:"EN ATTENTE DE CONFIRMATION",
                produit:{
                    titre:"Masque De Protection Lavable Homologation Ffp2",
                    quantite:1,
                    prix:640,
                }
            }
        },
    }
</script>

<style scoped>

</style>