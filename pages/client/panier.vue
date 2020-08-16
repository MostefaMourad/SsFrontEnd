<template>
    <v-container>
        <!-------- Les Commandes --------------------->
        <v-row align="center" v-for="n in article" :key="n">
            <v-col md="6">
                <commande-component> </commande-component>
            </v-col>
            <v-col md="6">
                <commande-component> </commande-component>
            </v-col>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </v-row>
        <v-row>
        <!-------- Prix total -------------------------->
        <v-card elevation-1 width="100%">
         <v-container>
         <v-row align="center"> 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <v-col md="5" align="center">
                 <v-row align="center">
                    <h2 class="font-weight-light ">
                    Total :
                    </h2>
                    <h2 class="font-weight-light primary--text">
                        {{prix_total}} DA
                    </h2> 
                 </v-row>
             </v-col>
             <v-col md="3">
                <v-btn color="white primary--text" @click="$router.push('/')">POURSUIVRE VOS ACHATS</v-btn> 
             </v-col>
             <v-col md="3" align="right">
                <v-btn color="primary" @click="$router.push('/client/commande/finaliser')">FINALISER VOTRE COMMANDE</v-btn>
             </v-col>
         </v-row>
         </v-container>
        </v-card>
        </v-row>
        <v-row>
        </v-row>
    </v-container>
</template>

<script>
import CommandeComponent from '@/components/CommandeComponent.vue';
    export default {
        data() {
            return {
                article: 4,
                prix_total:20000,
            }
        },
        components: {
            CommandeComponent,
        },
    }
</script>

<style scoped>

</style>