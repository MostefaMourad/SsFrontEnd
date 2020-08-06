<template>
<v-container>
    <v-card elevation="0">
        <v-card-title color="primary">
            <v-col align="center" class="display-3 primary--text">
                 Comment pouvons-nous vous aider ?
            </v-col>
        </v-card-title>
        <v-card-subtitle>
            <v-col align="center" style="font-size:20px;">
                 Envoyez-nous votre requête via le formulaire en ligne ci-contre et nous vous répondrons.
            </v-col>
        </v-card-subtitle>
              <v-divider
                class="mx-4"
                :inset="inset"
            ></v-divider>
        <v-card-text>
            <v-form>
                    <v-row>
                        <v-col align="center" md="6">
                            <v-text-field
                                v-model="name"
                                label="Nom Complet"
                                prepend-icon="mdi-account"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col align="center" md="6">
                            <v-text-field
                                label="Email"
                                v-model="email"
                                prepend-icon="mdi-gmail"
                                type="text"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row align="center">
                        <v-col align="center" md="6">
                            <v-text-field
                                v-model="num_commande"
                                label="Numéro de la commande"
                                prepend-icon="mdi-barcode"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col align="center" md="6">
                            <v-select
                            :items="items"
                            prepend-icon="mdi-comment-text"
                            label="Choisissez le sujet"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea
                                filled
                                label="Votre Message ..."
                                width="90%"
                                hint="Veillez renseigner tous les détails s'il vous plaît ..."
                                v-model="message"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>

                    </v-row>
                </v-form>
        </v-card-text>
            <v-divider
                class="mx-4"
                :inset="inset"
        ></v-divider>
        <v-card-actions>
            <v-row>
                <v-col align="center">
                    <v-btn width="90%" color="primary">
                        Envoyer maintenant
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-title color="primary">
            <v-col align="center" class="display-3 primary--text">
                Passation de commande
            </v-col>
        </v-card-title>
        <v-card
        outlined
        >
        <v-card-subtitle>
            <v-col align="center">
                Si vous rencontrez des difficultés à passer votre commande merci de nous appeler sur le numéro suivant
            </v-col>
        </v-card-subtitle>
        <v-card-title>
            <v-col align=center class="display-3">
            05-58-68-73-79
            </v-col>
        </v-card-title>
        </v-card>       
    </v-card>
</v-container>
</template>

<script>
    export default {
        data() {
            return {
                inset: false,
                num_commande:'',
                email:'',
                name:'',
                items: [
                    'Je souhaite confirmer ma commande', 
                    'Je souhaite suivre ma commande',
                    'Je souhaite Annuler ma commande ', 
                    'Problème de paeiment',
                    'Je souhaite suivre ma demande de retour/remboursement',
                    'Autres...'
                ],
                message:'',
            }
        },
    }
</script>

<style scoped>

</style>