// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    movies: []
}

//to handle state
const getters = {
    allMovies: (state: { movies: any; }) => state.movies
}

//to handle actions
const actions = {
    getMovies({ commit }:{ commit: any; }) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('SET_MOVIES', response.data)
           })
    }
}

//to handle mutations
const mutations = {
    SET_MOVIES(state: { movies: any; }, movies: any) {
        state.movies = movies
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})