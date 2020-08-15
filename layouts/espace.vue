<template>
  <v-app light>
    <v-navigation-drawer
      color="white"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in itemss"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dark
      color="primary"
      :clipped-left="clipped"
      fixed
      app
    >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title v-text="title" />
          <v-spacer></v-spacer>
          <v-btn
          dark
          @click="$router.push('/')"
          >
          <v-icon>
            mdi-logout
          </v-icon>
          SE déconnecter
          </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
        :absolute="!fixed"
        app
        dark
        padless
        width="100%"
    >
      <v-card
      flat
      tile
      dark
      width="100%"
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sos Shop </strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                itemss: [
                    {
                    icon: 'mdi-package-variant',
                    title: 'Mes Produits',
                    to: '/vendeur/espace/mesproduits'
                    },
                    {
                    icon: 'mdi-barcode',
                    title: 'Mes Commmandes',
                    to: '/vendeur/espace/mescommandes'
                    },
                    {
                    icon: 'mdi-store',
                    title: 'Boutique',
                    to: '/vendeur/profil'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Espace Vendeur',
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ],
                items:[
                    {
                      id:1,
                      titre:"Aide & FAQ",
                      link:"", 
                    },
                    {
                      id:2,
                      titre:"Contactez-nous",
                      link:"", 
                    },
                    {
                      id:3,
                      titre:"Modes de paiement",
                      link:"", 
                    },
                    {
                      id:4,
                      titre:"Modes de livraison",
                      link:"", 
                    },
                ],
                items1:[
                    {
                      id:1,
                      titre:"Qui somme–nous",
                      link:"", 
                    },
                    {
                      id:2,
                      titre:"Politique de confidentialité",
                      link:"", 
                    },
                    {
                      id:3,
                      titre:"Condition générale d’utilisation",
                      link:"", 
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>