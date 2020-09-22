<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    :height="height"
  >
    <v-carousel-item
      v-for="(item,i) in publicites"
      :key="i"
      :src="item.path"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
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
                return this.$store.getters['getAdds'];
          },
          publicites(){
                if(Array.isArray(this.pubs)){
                  var dir = "http://127.0.0.1:8000/storage/app/"  
                  this.adds = this.pubs.filter(d => {
                      return d.type === this.type
                  }).map(add => {
                      return {
                        path:dir+add.image,
                        }
                    });
                  return this.adds;
                }
                else{
                  return [];  
                }
            },
        },
    }
</script>

<style scoped>

</style>