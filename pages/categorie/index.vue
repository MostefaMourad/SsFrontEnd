<template>
    <v-container>
        <v-row>
            <!-------- Categorie  -->
            <cat-component></cat-component>
        </v-row>
            <v-row align="center" justify="center">
                <!-------- Categorie Image -->
                <v-img
                src="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
                lazy-src="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
                aspect-ratio="1"
                class="grey lighten-2"
                max-height="200"
                >
                <template v-slot:placeholder>
                    <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
                </v-img>
            </v-row>
        <v-row class="bread">
            <!-------- Bread Crumbs -->
            <v-breadcrumbs :items="items" >
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>
        <v-row>
            <!-------- Page Content -->
            <produits-component> </produits-component>
        </v-row>
    </v-container>
</template>

<script>
import CatComponent from '@/components/CatComponent.vue';
import ProduitsComponent from '@/components/ProduitsComponent.vue';
    export default {
        components: {
            CatComponent,
            ProduitsComponent,
        },
        data() {
            return {
                items: [
                {
                    text: 'Accueil',
                    disabled: false,
                    href: 'SsFrontEnd/',
                },
                {
                    text: 'Informatique',
                    disabled: false,
                    href: 'SsFrontEnd/categorie',
                },
                {
                    text: 'Imprimentes et scanners',
                    disabled: true,
                    href: 'SsFrontEnd/categorie',
                },
                ],
            }
        },
    }
</script>

<style scoped>
.bread{
    background-color: #E0F7FA;
}
</style>