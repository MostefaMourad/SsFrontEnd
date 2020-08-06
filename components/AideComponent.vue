<template>
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left >mdi-help-circle</v-icon>
          Aide
          &nbsp;&nbsp;&nbsp;
          <v-icon left >mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="$router.push(item.lien)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                        { title: 'Accueil', lien:'/'},
                        { title: 'Nos Services', lien:'/aide/noservices'},
                        { title: 'Aide & FAQ', lien:'/aide/faq' },
                        { title: 'Contacter nous', lien:'/aide/contactus' },
                        { title: 'Vendez sur Sos shop', lien:'/vendeur'},
                    ],            
            }
        },
    }
</script>

<style scoped>
</style>