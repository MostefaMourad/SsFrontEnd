<template>
    <v-container>
           <v-card class="elevation-0">
              <v-card-text>
                <v-form>
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
                            :rules="emailRules"
                        ></v-text-field>
                        </v-col>
                       <v-col align="center" md="6"> 
                        <v-text-field
                            id="password"
                            label="Mot de Passe"
                            name="password"
                            v-model="user.password"
                            prepend-icon="mdi-lock"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            hint="Au moins 8 caractères"
                            counter
                            :rules="passRules"
                            @click:append="show1 = !show1"
                        ></v-text-field>
                       </v-col>
                    </v-row>
                    <v-row>
                        <v-col align="center" md="1">
                            <v-subheader>Préfixe</v-subheader>
                            <h3>+213</h3>
                        </v-col>
                        <v-col md="5">
                          <v-text-field
                            label="Téléphone Mobile"
                            type="text"
                            v-model="user.telephone"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col md="6">
                            <v-row align="center">
                                <v-checkbox
                                    v-model="checkbox"
                                    label="J'ai lu et j'accepte les "
                                    required
                                ></v-checkbox>
                                &nbsp;
                                <a href="">
                                    <h3>
                                     Conditions générale de vente
                                    </h3>
                                </a> 
                           </v-row>
                        </v-col>
                    </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-row>
                      <v-col align="center">
                          <v-btn color="primary" width="90%" @click="register()" >créer un compte</v-btn>
                      </v-col>
                  </v-row>
              </v-card-actions>
            </v-card>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                show1: false,
                checkbox:false,
                valid: false,
                user:{
                   nom: '',
                   prenom: '',
                   password:'',
                   telephone:'',
                   email:'',
                },
                emailRules: [
                    v => !!v || 'E-mail est requis',
                    v => /.+@.+\..+/.test(v) || 'E-mail doit être valide',
                ],
                passRules: [
                    v => !!v || 'Mot de passe est requis',
                    v => v.length >= 8 || 'Minimum 8 charactères',
                ],
            }
        },
        methods: {
            register() {
                if(this.checkbox){
                    this.$store.dispatch('authClient/register',this.user);    
                }
                else{
                    
                }
            }
        },
    }
</script>

<style scoped>

</style>