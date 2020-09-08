<template>
    <div>
     <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
         <v-icon left >mdi-account</v-icon>
          Se Connecter
        </v-btn>
      </template>
      <v-list>
        <v-col>
            <!-- Se connecter -->
            <v-row v-show="!auth">
            <v-list-item
            >
              <v-btn @click="$router.push('/client/auth/login')" color="primary" width="100%"> Se Connecter </v-btn>
            </v-list-item>
            </v-row>

            <v-divider
            v-show="!auth"
            ></v-divider>

            <!-- Créer un compte -->
            <v-row v-show="!auth">
            <v-list-item
            >
              <v-btn @click="$router.push('/client/auth/register')" text color="primary"> créer un compte </v-btn>
            </v-list-item>
            </v-row>

            <v-divider v-show="!auth"></v-divider>
             <!-- INFOS compte -->
            <v-row v-show="auth">
                <v-list-item
                @click="$router.push('/client/profil/infos')"
                >
                <v-list-item-title> Votre Compte</v-list-item-title>
                </v-list-item>
            </v-row>
            <v-row v-show="auth">
                <v-list-item
                @click="$router.push('/client/profil/commandes')"
                >
                <v-list-item-title> Vos Commandes </v-list-item-title>
                </v-list-item>
            </v-row>
             <!-- se déconnecter -->
            <v-divider v-show="auth"></v-divider>
            <v-row v-show="auth">
              <v-list-item
              >
              <v-btn color="primary" width="100%"> se déconnecter </v-btn>
            </v-list-item>
            </v-row>
        </v-col>  
      </v-list>
    </v-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data() {
            return {
            }
        },
        props: {
          on:null,
          attrs:null,
        },
        computed: mapState({
            auth: 'authenticated', 
          }),
    }
</script>

<style scoped>

</style>