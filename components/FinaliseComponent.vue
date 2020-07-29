<template>
    <v-container>
        <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1" editable>
            1.ADRESS
            <small>Préciser l'adresse de livraison</small>
            </v-stepper-step>

            <v-stepper-content step="1">
                 <v-container>
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
                    <v-row align="center">
                        <v-col align="center" md="2">
                            <v-subheader>Préfixe</v-subheader>
                            <h4>+213</h4>
                        </v-col>
                        <v-col md="10">
                          <v-text-field
                            label="Téléphone Mobile"
                            type="text"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                      <v-col align="center">
                          <v-textarea
                            v-model="adress"
                            auto-grow
                            filled
                            color="primary"
                            label="Adresse*"
                            rows="1"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-select
                            :items="items"
                            label="Région*"
                            ></v-select>
                        </v-col>
                        <v-col md="6">
                            <v-select
                            :items="villes"
                            label="Ville*"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <small>*indique le champ obligatoire</small>
                    <v-row>
                        <v-col align="center">
                          <v-btn color="primary" width="90%" @click="e6 = 2">ENREGISTRER</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-container>
            </v-stepper-content>
            <v-stepper-step :complete="e6 > 2" editable step="2">2.MODE DE LIVRAISON</v-stepper-step>

            <v-stepper-content step="2">
                <v-container>
                    <v-col>
                    <v-row>
                        <v-col md="10">
                           <h4> Comment voulez-vous que votre commande soit livrée ? </h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col md="12">
                                    <v-radio-group v-model="radios" :mandatory="false">
                                    <v-radio
                                        label="Livraison standard"
                                        color="primary"
                                        value="1"
                                    ></v-radio>
                                    </v-radio-group>
                                </v-col>
                                <v-col align="center">
                                    <v-card outlined>
                                       <div>
                                        Veuillez vous assurer que l’adresse indiquée est celle de votre domicile, et non pas de votre bureau, afin qu’on puisse vous livrer sans inconvénient.
                                       </div>
                                       <div class="red--text">
                                        En raison des dernières annonces gouvernementales liés à la crise du Covid 19, nos délais de livraisons ont été allongés
                                       </div>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                    <v-col>
                        <v-row>
                          <v-col md="8" align="left">
                            <h4> Sous-total </h4>
                          </v-col>
                          <v-col md="4" align="right">
                            <h4> {{prix}} DA</h4>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col md="8" align="left">
                            <h4> Montant de livraison </h4>
                          </v-col>
                          <v-col md="4" align="right">
                                 {{livraison}} DA
                          </v-col>
                        </v-row>
                        <v-divider
                            class="mx-4"
                            :inset="inset"
                        ></v-divider>
                        <v-row>
                           <v-col md="8" align="left">
                            <h4> Total </h4>
                          </v-col>
                          <v-col md="4" align="right" >
                             <h4 class="primary--text">  {{livraison+prix}} DA </h4>
                          </v-col>
                        </v-row>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col align="center">
                          <v-btn color="primary" width="90%" @click="e6 = 3">CONTINUER</v-btn>
                    </v-col>
                    </v-row>
                    </v-col>
                </v-container>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" editable step="3">3.MODE DE PAIEMENT</v-stepper-step>

            <v-stepper-content step="3">
                            <v-container>
                    <v-col>
                    <v-row>
                        <v-col md="10">
                           <h4> Quel moyen de paiement voulez-vous utiliser ? </h4>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col md="12">
                                    <v-radio-group v-model="radios" :mandatory="false">
                                    <v-radio
                                        label="Paiement à la livraison"
                                        color="primary"
                                        value="1"
                                    ></v-radio>
                                    </v-radio-group>
                                </v-col>
                                    <v-col class="col-md-12 mb-md-0 mb-3">
                                    <h3 class="font-weight-bold grey--text">Payez pour votre commande à la livraison:</h3>
                                    <ul class="list-unstyled">
                                    <li>
                                        <p class="font-weight-light grey--text"> En espèce, soyez certain d'avoir le montant exact du paiement. Nos livreurs ne sont pas munis de monnaie. </p>
                                    </li>
                                    <li>
                                        <p class="font-weight-light grey--text"> Le paiement se fera directement auprès du prestataire de livraison. </p>
                                    </li>
                                    </ul>
                                    </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                    <v-col>
                        <v-row>
                          <v-col md="8" align="left">
                            <h4> Sous-total </h4>
                          </v-col>
                          <v-col md="4" align="right">
                            <h4> {{prix}} DA</h4>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col md="8" align="left">
                            <h4> Montant de livraison </h4>
                          </v-col>
                          <v-col md="4" align="right">
                                 {{livraison}} DA
                          </v-col>
                        </v-row>
                        <v-divider
                            class="mx-4"
                            :inset="inset"
                        ></v-divider>
                        <v-row>
                           <v-col md="8" align="left">
                            <h4> Total </h4>
                          </v-col>
                          <v-col md="4" align="right" >
                             <h4 class="primary--text">  {{livraison+prix}} DA </h4>
                          </v-col>
                        </v-row>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col align="center">
                          <v-btn color="primary" width="90%" @click="dialog=true"> CONFIRMER LA COMMANDE </v-btn>
                    </v-col>
                    </v-row>
                    </v-col>
                </v-container>
            </v-stepper-content>
        </v-stepper>
            <v-dialog
                v-model="dialog"
                >
                <template>
                    <v-btn
                    disabled
                    >
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="headline teal lighten-2">
                        <v-row>
                            <h3 class="white--text">
                                MERCI
                            </h3>
                            <v-spacer> </v-spacer>
                            <h4 class="white--text">
                                COMMANDE N° {{commande}}
                            </h4>  
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                    <v-row>
                        <v-col class="col-md-12 mb-md-0 mb-3">
                        <h3 class="font-weight-bold grey--text"> ÉTAPES SUIVANTES</h3>
                        <v-spacer></v-spacer>
                        <ol class="list-unstyled">
                        <li>
                            <h2>Confirmation </h2>
                            <p> Félicitations! Votre commande a été prise en compte avec succès. Une confirmation vous sera envoyée par mail. Vous recevrez un SMS ou un appel de la part de notre Service Client. </p>
                        </li>
                        <li>
                            <h2>Expédition </h2>
                            <p> Votre commande sera expédiée et livrée à la date et au lieu dont vous aurez convenu avec le Service Client. </p>
                        </li>
                        <li>
                            <h2>Mon compte </h2>
                            <p> Vous pouvez suivre le statut de votre commande sur <a href="https://sosbusiness.dz/">https://sosbusiness.dz</a> en cliquant sur la rubrique "Mes commandes" en accédant à votre compte. </p>
                        </li>
                        </ol>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                         <h3 class="font-weight-bold grey--text">SUIVRE VOTRE COMMANDE </h3>
                         <v-stepper value="2">
                            <v-stepper-header>
                            <v-stepper-step step="1" complete> Commande passée </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="2">Confirmation</v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3">Préparation</v-stepper-step>
                            <v-divider></v-divider>

                            <v-stepper-step step="4">Expédition et Livraison </v-stepper-step>
                            <v-divider></v-divider>

                            <v-stepper-step step="5">Commande livrée</v-stepper-step>
                            </v-stepper-header>
                        </v-stepper>
                        </v-col>
                    </v-row>    
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-row>
                            <v-col align="center">
                                <v-btn
                                    color="primary"
                                    @click="voir"
                                    width="80%"
                                >
                                    VOIR VOS COMMANDES
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
                </v-dialog>
    </v-container>
</template>

<script>
    export default {
            data () {
            return {
               e6: 1,
               firstname: 'Mourad',
               lastname: 'Mostefa',
               adress:'',
               dialog:false,
               prix:4000,
               livraison:500,
               inset: false,
               commande:122321,
               radios:"1",
               items: ['Alger', 'Chlef', 'Blida', 'Jijel'],
               villes: ['Alger Centre', 'Ben Aknoun', 'Stawali', 'Herrache'],
            }
            },
            methods: {
                voir() {
                    this.dialog=false;
                    this.$router.push('/client/profil/commandes');
                }
            },
    }
</script>

<style scoped>

</style>