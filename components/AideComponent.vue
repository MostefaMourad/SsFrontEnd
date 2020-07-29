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
          @click="$router.push('/vendeur')"
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
                        { title: 'Livraison' },
                        { title: 'Garantie' },
                        { title: 'Modes de paiement' },
                        { title: 'Retour et remboursement' },
                        { title: 'Commander par téléphone' },
                        { title: 'Aide & FAQ' },
                        { title: 'Contacter nous' },
                        { title: 'Vendez sur Sos shop'},
                    ],            
            }
        },
    }
</script>

<style scoped>
</style>