<template>
    <v-container>
        <v-row>
            <v-col md="5">
                  <v-menu  top offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                        Catégories
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-group
                            v-for="item in items"
                            :key="item.title"
                            v-model="item.active"
                            :prepend-icon="item.action"
                            no-action
                            @mouseover="item.active = true"
                        >
                            <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                            </template>

                            <v-list-item
                            v-for="subItem in item.items"
                            :key="subItem.title"
                            @click="$router.push('/categorie')"
                            >
                            <v-list-item-content>
                                <v-list-item-title v-text="subItem.title"></v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                        </v-list>
                    </v-menu>
            </v-col>
            <v-col md="6">
                <h1>
                    {{categorie}}
                </h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                categorie: "Categorie",
                state:false,
                items: [
                {
                    action: 'mdi-laptop',
                    title: 'Informatique',
                    active: false,
                    items: [
                    { title: 'Ordinateurs Portable' },
                    {title: 'Ordinateurs fixes'},
                    {title: 'Imprimentes et Scanners'},
                    {title: 'Réseau et Connexion'},
                    {title: 'Periphrique et Accessoires'},
                    {title: 'Ecrans et Projection'}, 
                    {title: 'Consommable'},
                    ],
                },
                {
                    action: 'mdi-cellphone',
                    title: 'Télephonie et Accessoires',
                    active: false,
                    items: [
                    { title: 'Télephones fixes' },
                    { title: 'Télephones Portables' },
                    ],
                },
                {
                    action: 'mdi-chair-school',
                    title: 'Bureautiques',
                    active: false,
                    items: [
                    { title: 'Chaises de Bureau' },
                    { title: 'Meuble de Bureau' },
                    ],
                },
                {
                    action: 'mdi-car',
                    title: 'Automobiles',
                    active: false,
                    items: [
                    { title: 'Batteries' },
                    { title: 'Pneus' },
                    ],
                },
                {
                    action: 'mdi-sd',
                    title: 'Electroniques',
                    active: false,
                    items: [
                    ],
                },
                {
                    action: 'mdi-home',
                    title: 'Maison',
                    active: false,
                    items: [
                    { title: 'Electroménager' },
                    { title: 'Accessoires & Outils' },
                    { title: 'Hottes et Fours' },
                    { title: 'Eclairage et Luminaire' },
                    ],
                },
                {
                    action: 'mdi-gift',
                    title: 'Mode et Beauté',
                    active: false,
                    items: [
                    { title: 'Soin de cheveux' },
                    ],
                },            {
                    action: 'mdi-package',
                    title: 'Matériaux',
                    active: false,
                    items: [
                    ],
                },
                            {
                    action: 'mdi-emoticon-cool',
                    title: 'Loisirs et Divertissements',
                    active: false,
                    items: [
                    ],
                },
                            {
                    action: 'mdi-layers',
                    title: 'Services',
                    active: false,
                    items: [
                    { title: 'Recouvrement de créance et factures' },
                    ],
                },
                            {
                    action: 'mdi-pulse',
                    title: 'Santé',
                    active: false,
                    items: [
                    { title: 'Bandage Médicaux et Support' },
                    ],
                },
                            {
                    action: 'mdi-view-carousel',
                    title: 'Divers',
                    active: false,
                    items: [
                    ],
                },
            ],
            }
        },
    }
</script>

<style scoped>

</style>