<template>
    <v-container
    fluid
    >
      <v-row v-for="i in 2" :key="i">
          <v-col v-for="n in 6" :key="n" md="2">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    max-height="220"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="90px"
                    ></v-img>

                    <v-card-title style="font-size:14px;">
                    Nom Boutique
                    </v-card-title>
                    <v-card-subtitle>
                        Par : Nom Vendeur
                    </v-card-subtitle>
                    <v-card-actions >
                    <v-btn
                        color="primary"
                        small
                        @click="$router.push('/accueil/boutique/1')"
                    >
                        Aller vers Boutique
                    </v-btn>
                    </v-card-actions>
                </v-card>
          </v-col>
      </v-row>  
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>