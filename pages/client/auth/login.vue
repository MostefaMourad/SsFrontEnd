<template>
    <v-container>
        <v-row align="center">
            <v-col md="6">
                <login-component></login-component>
            </v-col>
            <v-divider
            class="mx-4"
            vertical
            ></v-divider>
            <v-col md="5.5" align="center">
                 <h1 class="display-1 font-weight-light primary--text mb-2">
                    Créer un compte
                </h1>
                 <h3 class="font-weight-light grey--text title mb-2">
                    Créez votre compte client Sos Shop en quelques clics ! Vous pouvez vous inscrire en utilisant votre adresse e-mail.
                </h3>
                <br><br><br><br>
                <v-btn color="primary" width="90%" >Créer Votre Compte </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
    export default {
        components: {
            LoginComponent,
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>