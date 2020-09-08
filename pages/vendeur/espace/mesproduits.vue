<template>
  <v-container>
    <v-card
    elevation="4"
    dark
    >
      <v-data-table
        :headers="headers"
        :items="data"
        sort-by="titre"
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
            <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
              <v-icon>
                mdi-plus
              </v-icon>
              Ajouter un Produit</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="12">
                          <v-text-field v-model="editedItem.titre" label="Titre"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="12">
                          <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.prix" label="Prix (DA)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.quantite" label="Quantité (unité)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.poids" label="Poids (Kg)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.marque" label="Marque"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.couleur" label="Couleur"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.longueur" label="Longueur (m)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.largeur" label="Largeur (m)"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.hauteur" label="Hauteur (m)"></v-text-field>
                        </v-col>
                      </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-col md="6" align="center">
                         <v-btn color="grey" text @click="close">Cancel</v-btn>
                      </v-col>
                      <v-col md="6">
                         <v-btn color="primary" width="100%" @click="save">Save</v-btn>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn icon small @click="editItem(item)" color="primary">
              <v-icon>
                mdi-pen
              </v-icon>
            </v-btn>
            <v-btn icon small @click="voir(item)" color="secondary">
              <v-icon>
                mdi-image-area
              </v-icon>
            </v-btn>
            <v-btn icon small @click="deleteItem(item)" color="error">
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
       <v-dialog v-model="dialog1" persistent max-width="500">
                <template>
                <v-btn
                    color="primary"
                    dark
                    disabled
                >
                </v-btn>
                </template>
                <v-card>
                    <v-container align="center">
                      <v-carousel hide-delimiters>
                          <v-carousel-item
                          v-for="(item,i) in editedItem.images"
                          :key="i"
                          :src="item.src"
                          max-height="95%"
                          ></v-carousel-item>
                      </v-carousel>
                      <v-btn width="100%" @click="close()" color="primary">Fermer</v-btn>
                    </v-container>
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
          text: 'Titre',
          align: 'titre',
          value: 'titre',
        },
        { text: 'Description', value: 'description' },
        { text: 'Prix(DA)', value: 'prix' },
        { text: 'Marque', value: 'marque' },
        { text: 'Quantite', value: 'quantite' },
        { text: 'Couleur', value: 'couleur' },
        { text: 'Longueur(m)', value: 'longueur' },
        { text: 'Largeur(m)', value: 'largeur' },
        { text: 'Hauteur(m)', value: 'hauteur' },
        { text: 'Poids(Kg)', value: 'poids' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      data: [],
      editedIndex: -1,
      dialog:false,
      dialog1:false,
      editedItem: {
        titre: '',
        description: '',
        prix: 0,
        marque: '',
        quantite:2,
        couleur: '',
        longueur: 0,
        largeur: 0,
        hauteur: 0,
        poids: 0,
        images:[],
      },
      defaultItem: {
        titre: '',
        description: '',
        prix: 0,
        marque: '',
        couleur: '',
        longueur: 0,
        largeur: 0,
        hauteur: 0,
        poids: 0,
        images:[],
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nouveau Produit' : 'Editer les Informations du Produit'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
      this.data = [
        {
        titre: 'titre1',
        description: 'saddefqfsf',
        prix: 12000,
        marque: 'Nike',
        quantite:2,
        couleur: 'rouge',
        longueur: 0.2,
        largeur: 0.45,
        hauteur: 0.22,
        poids: 0.5,
        images: [
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
        },
        {
        titre: 'titre1',
        description: 'saddefqfsf',
        prix: 12000,
        marque: 'Nike',
        quantite:2,
        couleur: 'rouge',
        longueur: 0.2,
        largeur: 0.45,
        hauteur: 0.22,
        poids: 0.5,
        images: [
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
        },{
        titre: 'titre1',
        description: 'saddefqfsf',
        prix: 12000,
        marque: 'Nike',
        quantite:2,
        couleur: 'rouge',
        longueur: 0.2,
        largeur: 0.45,
        hauteur: 0.22,
        poids: 0.5,
        images: [
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
        },{
        titre: 'titre1',
        description: 'saddefqfsf',
        prix: 12000,
        marque: 'Nike',
        quantite:2,
        couleur: 'rouge',
        longueur: 0.2,
        largeur: 0.45,
        hauteur: 0.22,
        poids: 0.5,
        images: [
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
        },
        ]
      },
      editItem (item) {
        this.editedIndex = this.data.indexOf(item) 
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      voir(item){
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog1 = true
      },
      deleteItem (item) {
        const index = this.data.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.data.splice(index, 1)
      },
      close () {
        this.dialog = false
        this.dialog1 = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
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