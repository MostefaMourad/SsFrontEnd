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
                          <v-btn color="primary" width="90%" @click="e6 = 1"> CONFIRMER LA COMMANDE </v-btn>
                    </v-col>
                    </v-row>
                    </v-col>
                </v-container>
            </v-stepper-content>
        </v-stepper>
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
               prix:4000,
               livraison:500,
               inset: false,
               radios:"1",
               items: ['Alger', 'Chlef', 'Blida', 'Jijel'],
               villes: ['Alger Centre', 'Ben Aknoun', 'Stawali', 'Herrache'],
            }
            },
    }
</script>

<style scoped>

</style>