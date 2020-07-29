<template>
    <v-container>
           <v-card class="elevation-0">
              <v-card-text>
                <v-form>
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
                            name="login"
                            prepend-icon="mdi-account"
                            type="text"
                        ></v-text-field>
                        </v-col>
                       <v-col align="center" md="6"> 
                        <v-text-field
                            id="password"
                            label="Mot de Passe"
                            name="password"
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
                        <v-col align="center" md="1">
                            <v-subheader>Préfixe</v-subheader>
                            <h3>+213</h3>
                        </v-col>
                        <v-col md="5">
                          <v-text-field
                            label="Téléphone Mobile"
                            type="text"
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
                          <v-btn color="primary" width="90%" @click="$router.push('/')" >créer un compte</v-btn>
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
                firstname: '',
                lastname: '',
                rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                },
            }
        },
    }
</script>

<style scoped>

</style>