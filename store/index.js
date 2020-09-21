import axios from "axios";


export const state = () => ({
    token : 'Bearer ',
    authenticated:false,
    userData:{},
    adds : [], 
  })

export const getters = {
    getAdds : state => {
    var dir = "http://127.0.0.1:8000/storage/app/"
    var adds = state.adds.map(add => {
      return {
         type:add.type,
         path:dir+add.image,
         }
    });
    return adds;  
    },
    getProduitsf : state => {
      return state.userData.produitsf ;  
    },
    getProduitss : state => {
      return state.userData.produitss ;  
    },
    getProduitst : state => {
      return state.userData.produitst ;  
    },
    getCategories : state => {
      return state.userData.sub_categories;
    }
}
export const mutations = {
  SET_DATA :(state,data) => {
    state.userData = data;
    state.adds = data.publicites;
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