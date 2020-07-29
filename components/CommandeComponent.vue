<template>
        <v-card
            class="mx-auto"
            elevation-1
        >
            <v-container>
                <v-row align="center">
                <v-col md="5">
                    <v-row align="center">
                        <v-col md="4">
                            <v-img src="https://picsum.photos/510/300?random"></v-img>
                        </v-col>
                        <v-spacer> </v-spacer>
                        <v-col md="8">
                            <v-row>
                            <h5 class="font-weight-light grey--text">
                                    Vendeur : {{commande.vendeur}}
                            </h5>
                            </v-row>
                            <v-row>
                            <h4>
                                {{commande.titre}} 
                            </h4>
                            </v-row>
                            <v-row>
                                <v-btn
                                text
                                color="primary"
                                >
                                <v-icon left >mdi-delete</v-icon>
                                Supprimer
                                </v-btn>
                            </v-row>
                            </v-col>
                    </v-row>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col  md="1">
                    <v-select
                    :items="items"
                    value="1"
                    dense
                    ></v-select>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col  md="1.5">
                    <h3>
                        {{commande.prix}} DA
                    </h3>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col  md="1">
                    <h3>
                        {{commande.livraison}} DA
                    </h3>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col  md="2">
                        <h2 class="font-weight-light primary--text">
                            {{commande.prix+commande.livraison}} DA
                        </h2> 
                </v-col> 
                </v-row>
            </v-container>
    </v-card>  
</template>

<script>
    export default {
        data() {
            return {
                commande: {
                   vendeur:"Shopping Abdellah",
                   titre:"Centure correctrice de posture Unisexe -Noir",
                   prix:5000,
                   livraison:0,
                },
                items: ['1', '2', '3', '4','5', '6', '7', '8','9','10'],
            }
        },
        
    }
</script>

<style scoped>

</style>