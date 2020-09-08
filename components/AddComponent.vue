<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="height"
  >
    <v-carousel-item
      v-for="(item,i) in adds"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
import { mapState } from 'vuex'

    export default {
        data() {
            return {
               items: [
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                  src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
              ],
            }
        },
        props: {
            height: {
                type: Number,
                default: 500 
            },
            type: {
                type: String,
                default: 'first' 
            },
        },
        computed: mapState({
          adds(state){
            return (this.$store.getters['adds/getAdds']).filter(d => {
              if(d.type == this.type){
                return {
                path:d.path,
                } 
              }
            }).map(d => {
                return {
                src:d.path,
                } 
            });
          }
        }),
    }
</script>

<style scoped>

</style>