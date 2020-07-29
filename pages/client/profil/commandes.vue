<template>
    <v-card elevation-1>
        <v-card-title>
             Vos Commandes ({{commandes}})
        </v-card-title>
        <v-card-text>
        <v-row v-for="n in commandes" :key="n">
            <v-col>
            <v-card outlined >
                <v-container>
                    <v-row>
                        <v-col md="4">
                            <v-img src="https://picsum.photos/510/300?random"></v-img>
                        </v-col>
                        <v-col md="8">
                            <v-row>
                                 <h2>
                                    {{commande.titre}} 
                                </h2>
                            </v-row>
                            <v-row>
                                <v-col md="6">
                                    <h1 class="font-weight-light grey--text">
                                     Prix : {{commande.prix}} DA
                                    </h1>
                                </v-col>
                                
                            </v-row>
                            <v-row align="center">
                                <v-col md="8">
                                    <h3 class="font-weight-light primary--text">
                                        {{commande.etat}}
                                    </h3>
                                </v-col>
                                <v-col md="4" align="right">
                                <v-btn text color="primary" >
                                    <v-icon left>
                                      mdi-clipboard-text
                                    </v-icon>
                                    DÉTAILS
                                </v-btn> 
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
            </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
                commandes: 3,
                commande: {
                   vendeur:"Shopping Abdellah",
                   titre:"Centure correctrice de posture Unisexe -Noir",
                   etat:"EN ATTENTE DE CONFIRMATION",
                   prix:20000,
                },
            }
        },
    }
</script>

<style scoped>

</style>