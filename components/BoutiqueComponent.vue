<template>
    <v-container
    fluid
    >
      <v-row>
          <v-col v-for="vend in boutiques" :key="vend.id" md="2">
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
                    {{vend.nom_boutique}}
                    </v-card-title>
                    <v-card-subtitle>
                        Par : {{vend.nom+" "+vend.prenom}}
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
        data() {
            return {
                vendeurs:[],
            }
        },
        computed: {
            bouts(){
                return this.$store.getters['getBoutiques'];
            },
            boutiques(){
                if(Array.isArray(this.bouts)){
                  this.vendeurs = this.bouts;  
                  return this.bouts;
                }
                else{
                  return [];  
                }
            },
        },
    }
</script>

<style scoped>

</style>