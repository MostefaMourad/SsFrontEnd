<template>
    <v-card elevation="4">
    <v-card-title>
        Modifier votre mot de passe
    </v-card-title>
    <v-card-text>
        <v-container>
            <v-col align=center>
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
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
                show1: false,
                pass1:'',
                show2: false,
                pass2:'',
                show3: false,
                pass3:'',
            }
        },
    }
</script>

<style scoped>

</style>