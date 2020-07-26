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
            <v-row v-show="auth">
            <v-list-item
            >
              <v-btn color="primary" width="100%"> Se Connecter </v-btn>
            </v-list-item>
            </v-row>
            <v-divider></v-divider>
            <v-row v-show="auth">
            <v-list-item
            >
              <v-btn text color="primary"> créer un compte </v-btn>
            </v-list-item>
            </v-row>
            <v-divider v-show="!auth"></v-divider>
            <v-row>
                <v-list-item
                @click=""
                >
                <v-list-item-title> Votre Compte</v-list-item-title>
                </v-list-item>
            </v-row>
            <v-row>
                <v-list-item
                @click=""
                >
                <v-list-item-title> Vos Commandes </v-list-item-title>
                </v-list-item>
            </v-row>
            <v-row v-show="!auth">
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
    export default {
        data() {
            return {
                auth: true,
            }
        },
    }
</script>

<style scoped>

</style>