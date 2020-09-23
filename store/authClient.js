import axios from "axios";

export const state = () => ({
    token:'Bearer ',
    auth:false,
    errorsMessage : '', 
})

export const getters = {
    getToken : state => {
        return state.token;
    },
    getAuthenticated : state => {
        return state.auth;
    },
    getErrors : state => {
        return state.errorsMessage;
    },
}
export const mutations = {
    SET_TOKEN : (state ,token ) => {
        state.token = token;
    },
    SET_AUTH : (state,data) => {
        state.auth = data;
    },
    SET_ERROR : (state ,msg ) => {
        state.errorsMessage = '';
        state.errorsMessage = msg ;   
    },
    RESET : state  => {
        state.errorsMessage = '';
        state.auth = false;
    },
}

export const actions = {
    register(context,Data){
           axios.post(`http://127.0.0.1:8000/api/acheteur/register`, {
               email: Data.email,
               password: Data.password,
               nom:Data.nom,
               prenom:Data.prenom,
               telephone:Data.telephone
           }).then(function (response) {
               context.commit('SET_AUTH',true);
               context.commit('SET_TOKEN','Bearer '+response.data.success.token);
           })
           .catch(function (error) {
                if(error.response.data.error){
                   context.commit('SET_ERROR',"Vous n'etes pas autorisé");    
                }
                else{
                   context.commit('SET_ERROR',"Verifier votre email et mot de passe");    
                }
                context.commit('SET_AUTH',false);
        });
    },
    login(context,Data){
        axios.post(`http://127.0.0.1:8000/api/acheteur/login`, {
               email: Data.email,
               password: Data.password,
           }).then(function (response) {
               context.commit('SET_AUTH',true);
               context.commit('SET_TOKEN','Bearer '+response.data.success.token);
           })
           .catch(function (error) {
                if(error.response.data.error){
                   context.commit('SET_ERROR',"Vous n'etes pas autorisé");    
                }
                else{
                   context.commit('SET_ERROR',"Verifier votre email et mot de passe");    
                }
                context.commit('SET_AUTH',false);
        });
    } 
}