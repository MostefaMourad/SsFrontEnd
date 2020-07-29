<template>
  <v-app light>
    <nav-bar></nav-bar>
    <v-container>
        <v-row>
            <v-col md="2">
                <v-card
                        class="mx-auto"
                        height="400"
                        width="256"
                    >
                        <v-navigation-drawer
                        class="deep-purple accent-4"
                        dark
                        permanent
                        >
                        <v-list>
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

                        <template v-slot:append>
                            <div class="pa-2">
                            <v-btn block>Logout</v-btn>
                            </div>
                        </template>
                        </v-navigation-drawer>
                    </v-card>
            </v-col>
            <v-col md="10">
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
        
    }
</script>

<style scoped>

</style>