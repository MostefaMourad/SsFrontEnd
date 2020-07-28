<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="height"
    style="margin-right:-100px"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Publicité </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
    export default {
        data() {
            return {
                colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
                ],
                slides: [
                'Premiére',
                'Seconde',
                'Troisième',
                'Quatrième',
                'Cinquième',
                ],
                windowSize:700,
            }
        },
          props: {
            height: {
                type: Number,
                default: 500 
            },
        },
    }
</script>

<style scoped>

</style>