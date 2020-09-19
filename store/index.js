import axios from "axios";


export const state = () => ({
    token : 'Bearer ',
    authenticated:false,
    userData:{}, 
  })

export const getters = {
    getAdds : state => {
    var dir = "http://127.0.0.1:8000/storage/app/"
    var adds = state.userData.publicites.map(add => {
      return {
         type:add.type,
         path:dir+add.image,
         }
    });
    return adds;  
    },
    getProduits : state => {
      var dir = "http://127.0.0.1:8000/storage/app/"
      var adds = state.userData.produits.map(product => {
        var imgs = product.images;
        var f = imgs.map(img => {
          return dir+img;
        });
        return {
          id:product.id,
          titre:product.titre,
          prix:product.prix,
          marque:product.marque,
          description:product.description,
          poids:product.poids,
          longueur:product.longueur,
          largeur:product.largeur,
          hauteur:product.hauteur,
          couleur:product.couleur,
          images:f,
        }
      });
      return adds;  
    },
    
}
export const mutations = {
  SET_DATA :(state,data) => {
    state.userData = data;
  },
}

export const actions = {
  getData(context){ 
    axios.get(`http://127.0.0.1:8000/api/accueil`,
        )
    .then(function (response) {
    context.commit('SET_DATA',response.data.data);
    })
    .catch(function (error) {   
    });     
  }, 
}