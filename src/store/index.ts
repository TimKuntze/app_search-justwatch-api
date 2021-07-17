// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  movies: [],
  filteredMovies: [],
  search: ""
}

//to handle getters
const getters = {
  allMovies: (state: { movies: any; }) => state.movies,
  filteredMovies: (state: { filteredMovies: any; }) => state.filteredMovies,
  search: (state: { search: any; }) => state.search
}

//to handle actions
const actions = {
  getMovies({ commit }: { commit: any; }) {
    axios.get('https://apis.justwatch.com/content/titles/en_US/popular?body=%7B%22fields%22:[%22cinema_release_date%22,%22full_path%22,%22full_paths%22,%22id%22,%22localized_release_date%22,%22object_type%22,%22poster%22,%22scoring%22,%22title%22,%22tmdb_popularity%22,%22backdrops%22,%22production_countries%22],%22enable_provider_filter%22:false,%22monetization_types%22:[],%22page%22:1,%22page_size%22:50,%22matching_offers_only%22:true%7D&language=en')
      .then(response => {
        commit('SET_MOVIES', response.data);
        console.log(response.data);
      })
  },
  setFilteredMovies({commit}: { commit: any; }) {
    commit('SET_FILTERED_MOVIES')
  },
  setSearch({commit}: { commit: any }, search: any) {
    commit('SET_SEARCH', search)
  }
}

//to handle mutations
const mutations = {
  SET_MOVIES(state: { movies: any; }, movies: any) {
    state.movies = movies
  },
  SET_FILTERED_MOVIES(state: { filteredMovies: any, movies: any, search: any}) {
state.filteredMovies = state.movies.items.filter( (movie: any) => movie.title.toUpperCase().includes(state.search.toUpperCase())); 
  },
  SET_SEARCH(state: {search: any}, search: any) {
    state.search = search;
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
