
<template>
    <v-container>
        <v-row>
    <v-hover v-slot:default="{ hover }">
        <v-card
        class="mx-auto"
        max-width="344"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-6"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="primary"
              class="white--text"
              fab
              large
              right
              top
              @click="$emit('open')"
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-card-title>
            Top western road trips
            </v-card-title>

            <v-card-subtitle>
            1,000 miles of wonder
            </v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-hover>
       </v-row>
    </v-container> 
</template>

<script>
    export default {
        data() {
          return {
           
          }
        },
    }
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>