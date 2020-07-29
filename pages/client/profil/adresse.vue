<template>
        <v-card elevation-4>
            <v-card-title> 
            Adresse personnelle
            </v-card-title>
        <v-card-text>
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
                label="Téléphone Mobile (+213)"
                type="text"
                v-model="tel"
            ></v-text-field> 
        </v-col>
        <v-col align="center" md="6">
            <v-text-field
                label="Téléphone Mobile Supplémentaire (+213)"
                type="text"
                v-model="tel1"
            ></v-text-field> 
        </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="Adresse"
                    v-model="adress"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field
                    label="Information supplémentaire"
                    v-model="adress"
                ></v-text-field>
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
        </v-card-text>
        <v-card-actions>
        <v-row>
        <v-col align="center">
         <v-btn width="90%" color="primary"> ENREGISTRER </v-btn>  
        </v-col>
        </v-row> 
        </v-card-actions>
        </v-card>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
                firstname: 'Mourad',
                lastname: 'Mostefa',
                adress:'',
                tel:"781872253",
                tel1:'',
                items: ['Alger', 'Chlef', 'Blida', 'Jijel'],
                villes: ['Alger Centre', 'Ben Aknoun', 'Stawali', 'Herrache'],
                }
        },
    }
</script>

<style scoped>

</style>