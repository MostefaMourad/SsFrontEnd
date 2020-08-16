<template>
  <div>
    <v-app-bar
      color="primary"
      dark
    >
      <v-container>
        <v-row
        align="center"
        >
          <v-col md="2">
            <v-toolbar-title>SOS SHOP</v-toolbar-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <connect-component> </connect-component>
          </v-col>
          <v-col>
            <aide-component> </aide-component>
          </v-col>
          <v-col>
              <v-btn
                v-bind="attrs"
                v-on="on"
                @click="$router.push('/client/panier')"
                dark
                color="#d6c096"
              >
                <v-icon left >mdi-cart-outline</v-icon>
                Panier
              </v-btn>
            </v-col>

            <v-btn
                v-bind="attrs"
                v-on="on"
                @click="$router.push('/client/panier')"
                dark
                color="#d6c096"
              >
              <v-icon left >mdi-layers</v-icon>
              Nos Services
            </v-btn>
        </v-row>
      </v-container> 
    </v-app-bar>
  </div>
</template>

<script>
import SearchComponent from '~/components/SearchComponent.vue'
import ConnectComponent from '@/components/ConnectComponent.vue'
import AideComponent from '@/components/AideComponent.vue'
    export default {
        components: {
            SearchComponent,
            ConnectComponent,
            AideComponent
        },
    }
</script>

<style scoped>

</style>