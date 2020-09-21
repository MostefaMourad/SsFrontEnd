
<template>
    <v-container>
        <v-row>
          <v-skeleton-loader
            class="mx-auto"
            width="200"
            type="card"
            :loading="load"
          >
          <v-hover v-slot:default="{ hover }">
        <v-card
        class="mx-auto"
        width="200"
        height="220"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-1 white--text"
                style="height: 100%;"
              >
              {{item.prix}} DA
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
              right
              small
              top
              @click="$emit('open')"
            >
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <v-card-title class="writing">
            {{item.titre}}
            </v-card-title>

            <v-card-subtitle class="writing1">
            {{item.description}}
            </v-card-subtitle>
          </v-card-text>
        </v-card>
      </v-hover>
          
          </v-skeleton-loader>
       </v-row>
    </v-container> 
</template>

<script>
    export default {
        data() {
          return {
            loading:true,
          }
        },
        props: {
          product: {
                Type: Object,
                default: null
          },
        },
        computed: {
          item() {
            if(this.product !== null){
              this.loading = false;
              return this.product;
            }
            else{
              this.loading = true;
              return {};
            } 
          },
          load(){
            if(this.product !== null){
              return false;
            }
            else{
              return true;
            } 
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
.writing{
  font-size: 12px;
  margin-top: -20px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.writing1{
  font-size: 11px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>