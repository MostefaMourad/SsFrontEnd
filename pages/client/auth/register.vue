<template>
    <v-container>
        <v-row>
            <v-col align="center">
                <v-row>
                    <v-col align="center">
                        <h1 class="display-1 font-weight-light primary--text mb-2">
                            Créer un compte
                        </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                       <register-component></register-component>
                    </v-col>
                </v-row>
                <v-devider class="mx-4">
                </v-devider> 
                <v-row>
                    <v-col align="center">
                        <h3 class="font-weight-light grey--text title mb-2">
                            Vous possédez déjà un compte ?
                        </h3>
                        <v-btn text color="primary" @click="$router.push('/client/auth/login')"> CONNECTEZ-VOUS </v-btn> 
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent.vue';
    export default {
        data() {
            return {
            valid: false,
            firstname: '',
            }
        },
        components: {
            RegisterComponent,
        },
    }
</script>

<style scoped>

</style>