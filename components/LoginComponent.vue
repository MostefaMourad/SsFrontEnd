<template>
    <v-container>
           <v-card class="elevation-0">
              <v-toolbar
                dark
                flat
                align-center
              >
              <v-row>
                  <v-col align="center">
                     <v-toolbar-title color="primary" align-center>Se Connecter</v-toolbar-title>
                  </v-col>
              </v-row>
              </v-toolbar>
              <v-spacer> </v-spacer>
              <v-card-text>
                <v-form>
                    <v-row>
                       <v-col align="center">
                        <v-text-field
                            label="Email"
                            name="login"
                            prepend-icon="mdi-account"
                            type="text"
                            :rules="emailRules"
                            v-model="user.email"
                        ></v-text-field>
                       </v-col>
                    </v-row>
                    <v-row>
                       <v-col align="center"> 
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
                    <v-row align="center">
                        <v-col md="6">
                            <v-checkbox
                                v-model="checkbox"
                                label="Rester connecté ?"
                                required
                            ></v-checkbox>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="6" align="right">
                            <a href="">
                                <h3>
                                Mot de passe oublié ?
                                </h3>
                            </a>
                        </v-col>
                    </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-row>
                      <v-col align="center">
                          <v-btn color="primary" width="90%" @click="login()" >S'identifier</v-btn>
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
                user:{
                   password:'',
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
            login() {
              this.$store.dispatch('authClient/login',this.user);   
            }
        },
    }
</script>

<style scoped>

</style>