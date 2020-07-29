<template>
    <v-container>
        <v-row>
            <v-col md="8">
                 <!------ Finalisation des achats ------------>
                 <h2 class="font-weight-light grey--text title mb-2">
                    FINALISATION DE LA COMMANDE
                </h2>
                <finalise-component> </finalise-component> 
            </v-col>
            <v-col md="4">
                <!------ Résumés sur les achats ------------>
                <h2 class="font-weight-light grey--text title mb-2">
                    RÉSUMÉ
                </h2> 
                <resume-component></resume-component>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FinaliseComponent from '@/components/FinaliseComponent.vue';
import ResumeComponent from '@/components/ResumeComponent.vue';
    export default {
        components: {
            FinaliseComponent,
            ResumeComponent,
        },
    }
</script>

<style scoped>

</style>