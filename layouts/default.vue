<template>
  <v-app light>
    <v-card
    dark
    flat
    >
    <v-row align="center">
      <v-col v-for="h in head" :key="h.title" md="4" align="center" class="">
        <v-icon>
          {{h.icon}}
        </v-icon>
          <a :href="h.ref" class="cc">
            {{h.titre}}
          </a>  
      </v-col>
    </v-row>
    </v-card>
    
    <nav-bar></nav-bar>
    <v-main >
        <nuxt />
    </v-main>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <footer-component> </footer-component> 
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import NavBarm from '@/components/NavBarm.vue';

export default {
  
  data () {
    return {
      mobileView: false,
      showNav: false,
      head:[
        {
          titre:"0550 810 307",
          icon:"mdi-phone",
          ref:"tel:+213550810307",
        },
        {
          titre:"0558 687 3790",
          icon:"mdi-phone",
          ref:"tel:+2135586873790",
        },
        {
          titre:"contact@sosbusiness.dz",
          icon:"mdi-gmail",
          ref:"mailto:contact@sosbusiness.dz",
        },
      ]
    }
  },
  components: {
    NavBar,
    NavBarm,
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    }
  },
  created () {
    this.$store.dispatch('getData');
  },
}
</script>
<style  scoped>
.cc{
  color: whitesmoke;
  text-decoration: none;
}
.cc:hover{
    text-decoration: underline;
}
</style>