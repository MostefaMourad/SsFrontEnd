<template>
    <v-container>
        <v-card elevation-1>
            <v-card-title>
                <v-row>
                    <v-col>
                        <h5>
                        VOTRE COMMANDE ({{article}} arcticles)
                        </h5>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider
                class="mx-4"
                :inset="inset"
            ></v-divider>
            <v-card-text>
                <v-row v-for="n in article" :key="n" align="center" >
                    <v-col md="4">
                            <v-img src="https://picsum.photos/510/300?random"></v-img>
                    </v-col>
                    <v-col md="8">
                        <v-row>
                        <h4>
                            {{commande.titre}} 
                        </h4>
                        </v-row>
                        <v-row>
                            <v-col md="6">
                                <h4 class="font-weight-light primary--text">
                                  Prix : {{commande.prix}}
                                </h4>
                            </v-col>
                            <v-col md="6">
                                <h4 class="font-weight-light grey--text">
                                    Qté : {{commande.quantite}}
                                </h4>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                    <v-divider
                    class="mx-4"
                    :inset="inset"
                    ></v-divider>
                <v-row>
                <v-col>
                    <v-row>
                        <v-col md="8" align="left">
                        <h4> Sous-total </h4>
                        </v-col>
                        <v-col md="4" align="right">
                        <h4> {{commande.prix*article}} DA</h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="8" align="left">
                        <h4> Montant de livraison </h4>
                        </v-col>
                        <v-col md="4" align="right">
                                {{commande.livraison*article}} DA
                        </v-col>
                    </v-row>
                    <v-divider
                        class="mx-4"
                        :inset="inset"
                    ></v-divider>
                    <v-row>
                        <v-col md="8" align="left">
                        <h4> Total </h4>
                        </v-col>
                        <v-col md="4" align="right" >
                            <h4 class="primary--text">  {{(commande.livraison+commande.prix)*article}} DA </h4>
                        </v-col>
                    </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider
                class="mx-4"
                :inset="inset"
            ></v-divider>
            <v-card-actions>
            <v-row>
                <v-col align="center">
                <v-btn
                    text
                    color="primary"
                    >
                    RETOUR AU PANIER
                </v-btn>
                </v-col>
            </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                inset: false,
                article:3,
                commande: {
                   vendeur:"Shopping Abdellah",
                   titre:"Centure correctrice de posture Unisexe -Noir",
                   prix:5000,
                   livraison:85,
                   quantite:1
                },
            }
        },
    }
</script>

<style scoped>

</style>