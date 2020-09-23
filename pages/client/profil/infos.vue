<template>
    <v-container>
        <v-card elevation-1>
           <v-card-title> 
               Informations personnelles
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
                        label="Email"
                        v-model="user.email"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                    ></v-text-field>
                    </v-col>
                    <v-col align="center" md="6">
                        <v-text-field
                            label="Téléphone Mobile (+213)"
                            type="text"
                            v-model="user.telephone"
                        ></v-text-field> 
                    </v-col>
                </v-row>
            <v-row align="center">
            <v-col md="6">
            <v-select
            :items="items"
            prepend-icon="mdi-account-switch"
            v-model="user.genre"
            label="Genre(Optionnel)"
            ></v-select>
            </v-col>
            <v-col md="6">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="user.date_naissance"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="user.date_naissance"
                        label="Date de naissance"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="user.date_naissance" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(user.date_naissance)">OK</v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-col>
            </v-row>
           </v-card-text>
           <v-card-actions>
           <v-row align="center">
               <v-col align="center">
                <v-btn width="90%" color="primary" @click="save()"> ENREGISTRER </v-btn>  
               </v-col>
           </v-row> 
           </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
               user : {
                nom: '',
                prenom: '',
                email:'',
                telephone:'',
                date_naissance:'',
                genre:'',
               }, 
               modal:false,
               items: ["Homme", "Femme"],
            }
        },
        methods: {
            save() {
                  
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
                  this.user.email = (this.achet.email !== null) ? this.achet.email : '';
                  this.user.telephone = (this.achet.telephone !== null) ? this.achet.telephone : '';
                  this.user.genre = (this.achet.genre !== null) ? this.achet.genre : '';
                  this.user.date_naissance = (this.achet.date_naissance !== null) ? this.achet.date_naissance : '';
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