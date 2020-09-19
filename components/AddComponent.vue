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
      :src="item.path"
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
              adds:[],
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
        computed: {
          pubs(){
            var data =  this.$store.getters['getAdds'];
            this.adds = data.filter(d => {
              if(d.type == this.type){
                return {
                path:d.path,
                } 
              }
            });
            return this.adds;
          }
        },
    }
</script>

<style scoped>

</style>