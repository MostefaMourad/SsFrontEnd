<template>
    <v-layout
    column
    justify-center
    align-center
    >
        <v-container>
            <v-card elevation="0">
                <v-card-title>
                   <v-col align="center" class="display-3 primary--text">
                        Service Clientèle Sos Shop
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-row align="center">
                      <v-col v-for="quest in questions" :key="quest.id" md="6">
                        <v-card
                            outlined
                            >
                            <v-row align="center">
                                <v-col md="10">
                                <v-card-title class="question">
                                    {{quest.question}}
                                </v-card-title>
                                </v-col>
                                <v-col md="2" >
                                    <v-btn
                                    icon
                                    @click="quest.show = !quest.show"
                                    >
                                        <v-icon>{{ quest.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-expand-transition >
                            <div v-show="quest.show">
                                <v-divider></v-divider>
                                <v-card-text class="reponse">
                                    {{quest.reponse}}
                                </v-card-text>
                            </div>
                            </v-expand-transition>
                        </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card> 
        </v-container>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                questions : [
                    {
                        id:1,
                        show:false,
                        question:"Question  fréquente 1 ?",
                        reponse:"Réponse 1",
                    },
                    {
                        id:2,
                        show:false,
                        question:"Question  fréquente 2 ?",
                        reponse:"Réponse 2",
                    },
                    {
                        id:3,
                        show:false,
                        question:"Question  fréquente 3 ?",
                        reponse:"Réponse 3",
                    },
                    {
                        id:4,
                        show:false,
                        question:"Question  fréquente 4 ?",
                        reponse:"Réponse 4",
                    },
                    {
                        id:5,
                        show:false,
                        question:"Question  fréquente 5 ?",
                        reponse:"Réponse 5",
                    },
                    {
                        id:6,
                        show:false,
                        question:"Question  fréquente 6 ?",
                        reponse:"Réponse 6",
                    },
                    {
                        id:7,
                        show:false,
                        question:"Question  fréquente 7 ?",
                        reponse:"Réponse 7",
                    }
                ] ,
            }
        },
    }
</script>

<style scoped>
.question{
    color: grey;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.reponse{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
}
</style>