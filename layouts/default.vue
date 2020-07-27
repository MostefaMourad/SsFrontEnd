<template>
  <v-app light>
    <nav-bar></nav-bar>
    <v-main >
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  
  data () {
    return {
      
    }
  },
  components: {
    NavBar,
  },
}
</script>
