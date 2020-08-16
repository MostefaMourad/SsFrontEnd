<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      dark
      color="#d6c096"
    >
      <v-toolbar-title> Categories </v-toolbar-title>

    </v-toolbar>

    <v-list dense>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
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
  </v-card>
</template>


<script>
    export default {
        data() {
            return {
                state:false,
                items: [
            {
                action: 'mdi-laptop',
                title: 'Informatique',
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
                active: true,
                items: [
                { title: 'Télephones fixes' },
                { title: 'Télephones Portables' },
                ],
            },
            {
                action: 'mdi-chair-school',
                title: 'Bureautiques',
                items: [
                { title: 'Chaises de Bureau' },
                { title: 'Meuble de Bureau' },
                ],
            },
            {
                action: 'mdi-car',
                title: 'Automobiles',
                items: [
                { title: 'Batteries' },
                { title: 'Pneus' },
                ],
            },
            {
                action: 'mdi-sd',
                title: 'Electroniques',
                items: [
                ],
            },
            {
                action: 'mdi-home',
                title: 'Maison',
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
                items: [
                { title: 'Soin de cheveux' },
                ],
            },            {
                action: 'mdi-package',
                title: 'Matériaux',
                items: [
                ],
            },
                        {
                action: 'mdi-emoticon-cool',
                title: 'Loisirs et Divertissements',
                items: [
                ],
            },
                        {
                action: 'mdi-pulse',
                title: 'Santé',
                items: [
                { title: 'Bandage Médicaux et Support' },
                ],
            },
                        {
                action: 'mdi-view-carousel',
                title: 'Divers',
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