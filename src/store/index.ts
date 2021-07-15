// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  movies: [],
  search: "",
  body: {}
}

//to handle state
const getters = {
  allMovies: (state: { movies: any; }) => state.movies
  
}

//to handle actions
const actions = {
  getMovies({ commit }: { commit: any; }) {
    axios.get('https://apis.justwatch.com/content/titles/en_US/popular?body=%7B%22fields%22:[%22cinema_release_date%22,%22full_path%22,%22full_paths%22,%22id%22,%22localized_release_date%22,%22object_type%22,%22poster%22,%22scoring%22,%22title%22,%22tmdb_popularity%22,%22backdrops%22,%22production_countries%22,%22offers%22,%22original_release_year%22,%22backdrops%22],%22enable_provider_filter%22:false,%22query%22:%22movie%22,%22monetization_types%22:[],%22page%22:3,%22page_size%22:20,%22matching_offers_only%22:false%7D&language=e')
      .then(response => {
        commit('SET_MOVIES', response.data);
        console.log(response.data);
      })
  }
}

//to handle mutations
const mutations = {
  SET_MOVIES(state: { movies: any; }, movies: any) {
    state.movies = movies
    console.log('Movies:', movies)
  },
  searchMovie(state: any, search: string) {
    state.search = search;
    console.log(state.search);

    state.body = { "fields": ["cinema_release_date", "full_path", "full_paths", "id", "localized_release_date", "object_type", "poster", "scoring", "title", "tmdb_popularity", "backdrops", "production_countries", "offers", "original_release_year", "backdrops"], "enable_provider_filter": false, "query": "", "monetization_types": [], "page": 1, "page_size": 20, "matching_offers_only": false }

    axios.get(`https://apis.justwatch.com/content/titles/en_US/popular?body=%7B%22fields%22:[%22cinema_release_date%22,%22full_path%22,%22full_paths%22,%22id%22,%22localized_release_date%22,%22object_type%22,%22poster%22,%22scoring%22,%22${search}%22,%22tmdb_popularity%22,%22backdrops%22,%22production_countries%22,%22offers%22,%22original_release_year%22,%22backdrops%22],%22enable_provider_filter%22:false,%22query%22:%22movie%22,%22monetization_types%22:[],%22page%22:3,%22page_size%22:20,%22matching_offers_only%22:false%7D&language=e`)
      .then(response => {
        // commit('SET_MOVIES', response.data)
        console.log('Searched movies', response.data)
      })
      
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

function allMovies(allMovies: any) {
  throw new Error('Function not implemented.');
}
