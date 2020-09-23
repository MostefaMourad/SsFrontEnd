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
                        v-model="firstname"
                        label="Prénom"
                        required
                    ></v-text-field>
                </v-col>
                <v-col align="center" md="6">
                    <v-text-field
                        v-model="lastname"
                        label="Nom"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
                <v-row>
                    <v-col align="center" md="6">
                    <v-text-field
                        label="Email"
                        v-model="email"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                    ></v-text-field>
                    </v-col>
                    <v-col align="center" md="6">
                        <v-text-field
                            label="Téléphone Mobile (+213)"
                            type="text"
                            v-model="tel"
                        ></v-text-field> 
                    </v-col>
                </v-row>
            <v-row align="center">
            <v-col md="6">
            <v-select
            :items="items"
            prepend-icon="mdi-account-switch"
            label="Genre(Optionnel)"
            ></v-select>
            </v-col>
            <v-col md="6">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Date de naissance"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-col>
            </v-row>
           </v-card-text>
           <v-card-actions>
           <v-row align="center">
               <v-col align="center">
                <v-btn width="90%" color="primary"> ENREGISTRER </v-btn>  
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
               firstname: 'Mourad',
               lastname: 'Mostefa',
               email:"hm_mostefa@esi.dz",
               tel:"781872253",
               items: ['Veuillez sélectionner', 'Homme', 'Femme'],
               date:'',
               modal:false,
               
            }
        },
    }
</script>

<style scoped>

</style>