import axios from "axios";

export const state = () => ({
    adds : [], 
  })

export const getters = {
    getAdds : state => {
        var dir = "/home/mostefa/Developpement/Projects/Web/SOSSHOP/SosShop_Backend/storage/app/"
        var adds = state.adds.map(add => {
          return {
             type:add.type,
             path:dir+add.image,
             }
        });
        return adds;
    },  
}
export const mutations = {
    SET_ADDS :(state,data) => {
        state.adds = data;
    },
}

export const actions = {
    getData(context){ 
        axios.get(`http://127.0.0.1:8000/api/publicite`)
        .then(function (response) {
        context.commit('SET_ADDS',response.data.data); 
        })
        .catch(function (error) {   
    });     
    },
}