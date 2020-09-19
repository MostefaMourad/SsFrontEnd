<template>
<v-container>
    <v-col align="center">
    <v-card elevation-1 width="80%">
        <v-card-title>
            Ajoutez votre compte vendeur
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                <v-col align="center" md="6">
                    <v-text-field
                        v-model="firstname"
                        label="Prénom*"
                        prepend-icon="mdi-account"
                        required
                    ></v-text-field>
                </v-col>
                <v-col align="center" md="6">
                    <v-text-field
                        v-model="lastname"
                        label="Nom*"
                        prepend-icon="mdi-account"
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
                <v-row>
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
                        v-model="adresse"
                        label="Adresse"
                        prepend-icon="mdi-marker"
                        required
                    ></v-text-field>
                </v-col>
                </v-row>
                <v-row align="center">
                        <v-checkbox
                            v-model="checkbox"
                            label="J'ai lu et accépté la"
                            required
                        ></v-checkbox>
                        &nbsp;&nbsp;
                        <a href="">
                            <h3>
                              Politique de Confidentialité
                            </h3>
                        </a>
                </v-row>
                <v-row>
                    <v-col align="center" md="6">
                        <v-text-field
                            label="Adresse Email*"
                            v-model="email"
                            prepend-icon="mdi-gmail"
                            type="text"
                        ></v-text-field>
                       </v-col>
                       <v-col align="center" md="6">
                        <v-text-field
                            label="Retaper l'Adresse Email*"
                            v-model="c_email"
                            prepend-icon="mdi-gmail"
                            type="text"
                        ></v-text-field>
                       </v-col>
                </v-row>
                <v-row>
                    <v-col align="center" md="6"> 
                        <v-text-field
                            id="password"
                            label="Mot de Passe*"
                            v-model="password"
                            prepend-icon="mdi-lock"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            hint="Au moins 8 caractères"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                       </v-col>
                       <v-col align="center" md="6"> 
                        <v-text-field
                            id="password"
                            label="Confirmer votre Mot de Passe*"
                            v-model="c_password"
                            prepend-icon="mdi-lock"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            hint="Au moins 8 caractères"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                       </v-col>
                </v-row>
                <v-row>
                    <v-col align="left">
                        <h3>*indique le champ obligatoire</h3>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
                <v-col align="center">
                    <v-btn color="primary" width="90%" @click="$router.push('/vendeur/espace/mesproduits')">Créer un Compte </v-btn>
                </v-col>
          </v-row>
        </v-card-actions>
    </v-card> 
    <v-row>
        <v-col align="center">
            <h3 class="font-weight-light grey--text title mb-2">
                Vous possédez déjà un compte ?
            </h3>
            <v-btn text color="primary" @click="$router.push('/vendeur/auth/login')" > CONNECTEZ-VOUS </v-btn> 
        </v-col>
    </v-row> 
    </v-col>
</v-container>
</template>

<script>
    export default {
        data() {
            return {
                firstname:'',
                lastname:'',
                tel:'',
                tel1:'',
                boutique:'',
                adresse:'',
                email:'',
                c_email:'',
            }
        },
    }
</script>

<style scoped>

</style>