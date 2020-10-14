<template>
        <v-card elevation-4>
            <v-card-title> 
            Adresse personnelle
            </v-card-title>
        <v-card-text>
        <v-row>
        <v-col align="center" md="6">
            <v-text-field
                v-model="user.nom"
                label="Nom"
                required
            ></v-text-field>
        </v-col>
        <v-col align="center" md="6">
            <v-text-field
                v-model="user.prenom"
                label="Prénom"
                required
            ></v-text-field>
        </v-col>
        </v-row>
        <v-row>
        <v-col align="center" md="6">
            <v-text-field
                label="Téléphone Mobile (+213)"
                type="text"
                v-model="user.telephone"
            ></v-text-field> 
        </v-col>
        <v-col align="center" md="6">
            <v-text-field
                label="Téléphone Mobile Supplémentaire (+213)"
                type="text"
                v-model="user.telephone_sup"
            ></v-text-field> 
        </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="Adresse"
                    v-model="user.adresse"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
        <v-col md="6">
            <v-select
            :items="regions"
            v-model="user.region"
            label="Région*"
            ></v-select>
        </v-col>
        <v-col md="6">
            <v-select
            v-model="user.ville"
            :items="villes"
            label="Ville*"
            ></v-select>
        </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-row>
        <v-col align="center">
         <v-btn width="90%" color="primary"> ENREGISTRER </v-btn>  
        </v-col>
        </v-row> 
        </v-card-actions>
        </v-card>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
            user : {
              nom: '',
              prenom: '',
              telephone_sup:'',
              telephone:'',
              adresse:'',
              region:'',
              ville:'',
            }, 
               modal:false,
               villes: [],
               regions : [],
            }
        },
        computed: {
          achet(){
                return this.$store.getters['user/getUser'];
          },
          acheteur(){
                if(this.achet !== null){
                  this.user.nom = (this.achet.nom !== null) ? this.achet.nom : '';
                  this.user.prenom = (this.achet.prenom !== null) ? this.achet.prenom : '';
                  this.user.telephone_sup = (this.achet.telephone_sup !== null) ? this.achet.telephone_sup : '';
                  this.user.telephone = (this.achet.telephone !== null) ? this.achet.telephone : '';
                  this.user.adresse = (this.achet.adresse !== null) ? this.achet.adresse : '';
                  this.user.region = (this.achet.region !== null) ? this.achet.region : '';
                  this.user.ville = (this.achet.ville !== null) ? this.achet.ville : '';
                  return this.user;
                }
                else{
                  return {};  
                }
            },
        },
    }
</script>

<style scoped>

</style>