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
              Mes Commandes
              </v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
          </v-toolbar>
        </template>
        <template v-slot:item.details="{ item }">
            <v-btn icon @click="voir(item)" color="primary">
              <v-icon>
                mdi-clipboard-text
              </v-icon>
              Détails
            </v-btn>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
    </v-card>
   <v-dialog v-model="dialog1" persistent max-width="80%">
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
                        <v-row>
                            <v-col md="8">
                               <v-carousel hide-delimiters>
                                <v-carousel-item
                                v-for="(item,i) in product_images"
                                :key="i"
                                :src="item.src"
                                max-height="90%"
                                ></v-carousel-item>
                            </v-carousel>
                            </v-col>
                            <v-col align="center">
                                <v-row>
                                   <v-card-title
                                    v-text="produit.titre"
                                    ></v-card-title>
                                    <v-card-subtitle v-text="produit.description"></v-card-subtitle>
                                </v-row>
                                <v-row align="center">
                                    <v-btn
                                    color="primary"
                                    width="90%"
                                    @click="dialog1=false"
                                    >
                                    Fermer
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
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
          text: 'Numéro de Commande',
          align: 'start',
          value: 'num_commande',
        },
        { text: 'Quantite', value: 'quantite' },
        { text: 'Date Commande', value: 'date_commande' },
        { text: 'Prix Produit(DA)', value: 'prix' },
        { text: 'Prix Livraison', value: 'prix_livraison' },
        { text: 'Etat de la Commande', value: 'etat' },
        { text: 'Mode de Paiement', value: 'mode' },
        { text: 'Détails Produit', value: 'details', sortable: false },
      ],
      dialog1:false,
      data: [
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          },
          {
              num_commande:123555,
              quantite:2,
              date_commande:"2020-08-20",
              prix:1250,
              prix_livraison:200,
              etat:"En Attente de Confirmation",
              mode:"Paiement à la livraison",
          }
      ],
        produit:{
            titre:"Téléphone fixe Panasonic KX-TG1711",
            prix:3600,
            description:"Répertoire 50 noms - Horloge réveil sur le combiné - Écran rétroéclairé facile a lire - Finition anti traces de doigt - Vente en gros disponible - Livraison sur Alger gratuite / livraison hors wilaya (payante) - Produit avec garantie"
        },
        product_images: [
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