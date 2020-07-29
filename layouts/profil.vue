<template>
    <v-app>
    <nav-bar></nav-bar>
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card
                    elevation="1"
                    width="400"
                    >
                    <v-navigation-drawer
                        floating
                        permanent
                        width="400"
                    >
                        <v-list
                        >
                        <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                        >
                            <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-card>
            </v-col>
            <v-col md="8">
                <v-main >
                    <nuxt />
                </v-main>
            </v-col>
        </v-row>
    </v-container>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <footer-component> </footer-component> 
  </v-app>
</template>

<script>
    export default {
        layout:'profil',
        data() {
            return {
                items: [
                { title: 'Informations Personnelles', icon: 'mdi-account' },
                { title: 'Adresses', icon: 'mdi-map-marker-radius' },
                { title: 'Modifier votre Mot de passe', icon: 'mdi-account-key' },
                { title: 'Vos commandes', icon: 'mdi-package' },
                ],
            }
        },
    }
</script>

<style scoped>

</style>