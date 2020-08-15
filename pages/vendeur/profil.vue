<template>
    <v-container>
        <v-col align="center">
            <v-card>
            <v-toolbar flat color="primary" dark>
            <v-toolbar-title>Profil de l'Utilisateur</v-toolbar-title>
            </v-toolbar>
            <v-tabs vertical>
            <v-tab>
                <v-icon left>mdi-account</v-icon>
                Informations Personnelles
            </v-tab>
            <v-tab>
                <v-icon left>mdi-lock</v-icon>
                Modifier votre Mot de passe
            </v-tab>
            <v-tab>
                <v-icon left>mdi-cash-multiple</v-icon>
                PAIEMENT
            </v-tab>

            <v-tab-item>
                <v-container>
                    <v-col align="center">
                                <v-card flat>
            <v-card-title> 
               Informations personnelles
           </v-card-title>
           <v-card-text>
            <v-container>
            <v-row>
                <v-col align="center" md="6">
                        <v-text-field
                            v-model="firstname"
                            label="Prénom"
                            prepend-icon="mdi-account"
                            required
                        ></v-text-field>
                        </v-col>
                        <v-col align="center" md="6">
                            <v-text-field
                                v-model="lastname"
                                prepend-icon="mdi-account"
                                label="Nom"
                                required
                            ></v-text-field>
                        </v-col>
                        </v-row>
                        <v-row>
                        <v-col align="center" md="6">
                            <v-text-field
                                    label="Téléphone Mobile* (+213)"
                                    type="text"
                                    prepend-icon="mdi-phone"
                                    v-model="tel"
                            ></v-text-field> 
                            </v-col>
                            <v-col align="center" md="6">
                                <v-text-field
                                    label="Téléphone Mobile Supplémentaire (+213)"
                                    type="text"
                                    prepend-icon="mdi-phone"
                                    v-model="tel1"
                                ></v-text-field> 
                            </v-col>
                        </v-row>
                        <v-row align="center">
                        <v-col align="center" md="6">
                            <v-text-field
                                v-model="boutique"
                                label="Nom de la boutique*"
                                prepend-icon="mdi-store"
                                required
                            ></v-text-field>
                            </v-col>
                            <v-col align="center" md="6">
                                <v-text-field
                                    v-model="sponsor"
                                    label="Parrainé Par(Sponsorisé Par)"
                                    prepend-icon="mdi-account-network"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col align="center">
                                <v-text-field
                                    label="Adresse Email*"
                                    v-model="email"
                                    prepend-icon="mdi-gmail"
                                    type="text"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                     </v-container>
                    </v-card-text>
                    <v-card-actions>
                    <v-row align="center">
                        <v-col align="center">
                            <v-btn width="90%" color="primary"> ENREGISTRER </v-btn>  
                        </v-col>
                    </v-row> 
                    </v-card-actions>
                    </v-card>
                    </v-col>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-title> 
                        Modifier Votre Mot de Passe
                    </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-col align="center">
                        <v-row align=center>
                            <v-col align=center>
                                <v-text-field
                                    id="password"
                                    label="Mot de Passe Actuel"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    hint="Au moins 8 caractères"
                                    counter
                                    @click:append="show1 = !show1"
                                    v-model="pass1"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row align=center>
                            <v-col align=center>
                                <v-text-field
                                    id="password"
                                    label="Nouveau Mot de Passe"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show2 ? 'text' : 'password'"
                                    hint="Au moins 8 caractères"
                                    counter
                                    @click:append="show2 = !show2"
                                    v-model="pass2"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row align=center>
                            <v-col align=center>
                                <v-text-field
                                    id="password"
                                    label="Saisissez à nouveau le Mot de Passe"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show3 ? 'text' : 'password'"
                                    hint="Au moins 8 caractères"
                                    counter
                                    @click:append="show3 = !show3"
                                    v-model="pass3"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-col>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                     <v-col align="center">
                    <v-btn width="90%" color="primary"> ENREGISTRER </v-btn>  
                    </v-col>
                </v-card-actions>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                <v-card-text>
                    <h1>
                        A savoir comment vous allez Gérer vos paiements avec les vendeurs
                    </h1>
                </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
        </v-card>
        <v-row>
            <v-col align="center">
                <v-btn color="primary">
                    Consulter l'espace vendeur
                </v-btn>
            </v-col>          
        </v-row>
        </v-col>
    </v-container>
</template>

<script>
    export default {
        layout:'espace',
        data() {
            return {
               firstname: 'Mourad',
               lastname: 'Mostefa',
               email:"hm_mostefa@esi.dz",
               tel:"781872253",
               tel1:'',
               boutique:"Mourad Shop",
               sponsor:'',
               email:"hm_mostefa@esi.dz",
               modal:false,
               show1:false,
               pass1:'',
               show2:false,
               pass2:'',
               show3:false,
               pass3:'',
            }
        },
    }
</script>

<style scoped>

</style>