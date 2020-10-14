import axios from "axios";


export const state = () => ({
  token : 'Bearer ',
  authenticated:true,
    userData:{},
    adds : [],
    services : [], 
  })

export const getters = {
    getAdds : state => {
       return state.userData.publicites;
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
    },
    getBoutiques : state => {
      return state.userData.vendeurs;
    },
    getServices : state => {
      return state.services;
    }
}
export const mutations = {
  SET_DATA :(state,data) => {
    state.userData = data;
  },
  SET_USER :(state,data) => {
    state.user.userData = data;
  },
  SET_SERVICES :(state,data) => {
    state.user.services = data;
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
  getUserData(context){
    var self = this; 
    axios.get(`http://127.0.0.1:8000/api/acheteur/profil`,{
    headers: {
          'Authorization': self.state.user.token
        }},
        )
        .then(function (response) {
          context.commit('SET_USER',response.data.data); 
        })
        .catch(function (error) {   
    });     
   }, 
   getServices(context){
    var self = this; 
    axios.get(`http://127.0.0.1:8000/api/service`)
        .then(function (response) {
          context.commit('SET_SERVICES',response.data.data); 
        })
        .catch(function (error) {   
    });     
   }, 
}