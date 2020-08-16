<template>
        <v-card
            class="mx-auto"
            elevation-1
        >
            <v-container>
                <v-row align="center">
                <v-col md="3">
                    <v-img src="https://picsum.photos/510/300?random"></v-img> 
                </v-col>
                <v-col md="4">
                    <h6 class="font-weight-light grey--text">
                        Vendeur : {{commande.vendeur}}
                    </h6>
                    <h5>
                        {{commande.titre}} 
                    </h5>
                    <v-btn
                    text
                    color="primary"
                    >
                    <v-icon left >mdi-delete</v-icon>
                    Supprimer
                    </v-btn>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col md="2">
                    <v-select
                    :items="items"
                    value="1"
                    label="Quantité :"
                    dense
                    ></v-select>
                    <h5>
                        {{commande.prix}} DA
                    </h5>
                </v-col>
                <v-divider
                class="mx-4"
                vertical
                ></v-divider>
                <v-col md="1.5">
                        <h5 class="font-weight-light primary--text">
                            total : <br> {{commande.prix+commande.livraison}} DA
                        </h5> 
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