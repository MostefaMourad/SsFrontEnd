<template>
  <v-container>
    <v-card
    elevation="4"
    dark
    >
      <v-data-table
        :headers="headers"
        :items="data"
        sort-by="nom"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat dark>
            <v-toolbar-title>
              Mes Produits
              </v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn color="primary" @click="dialog1 = true">
              <v-icon>
                mdi-plus
              </v-icon>
              Ajouter Un produit
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.reponses="{ item }">
            <v-btn icon @click="voir(item)" color="primary">
              <v-icon>
                mdi-pen
              </v-icon>
            </v-btn>
            <v-btn icon @click="voir(item)" color="error">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
    </v-card>
    <v-dialog v-model="dialog1" persistent max-width="600px">
      <template>
        <v-btn
          color="primary"
          disabled
          hidden
        >
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-col align="center">
             Exporter les données
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-col align="left">
            <h1 class="class1"> Choisir la format :</h1>
            <v-select
              :items="formats"
              label="Format"
              outlined
            ></v-select>
            <v-text-field
            label="Nom du Fichier"
            outlined
          ></v-text-field>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-col align="center">
            <v-btn color="primary" width="90%" @click="dialog1 = false">Exporter</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    layout:'espace',
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nom',
          align: 'start',
          value: 'nom',
        },
        { text: 'Prénom', value: 'prenom' },
        { text: 'Lieu de Naissance', value: 'lieu_naissance' },
        { text: 'Tranche Age', value: 'tranche_age' },
        { text: 'Sexe', value: 'sexe' },
        { text: 'Latitude', value: 'latitude' },
        { text: 'Longitude', value: 'longitude' },
        { text: 'Réponses', value: 'reponses', sortable: false },
      ],
      dialog:false,
      dialog1:false,
      data: [],
      editedIndex: -1,
      dialog:false,
    }),

    computed: {
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    methods: {

      voir (item) {
       /* this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item) */
        this.dialog1 = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>
.question{
    color: grey;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 16px;
}
.reponse{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: left;
    font-size: 12px;  
}
.headline{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 32px;
}
.class1{
    color: black;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    margin-bottom: 10px;
}
</style>