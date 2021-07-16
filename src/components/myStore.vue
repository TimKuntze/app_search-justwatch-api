<template>
  <div class="hello">
    <header>
      <h1>{{ msg }}</h1>
      <img src="./../assets/film-reel-128_white.png" />
    </header>

    <div class="search-and-results">
      <div class="searcharea">
        <div class="input-container">
          <img src="./../assets/search-2-128.png" />
          <input
            @keypress="showSearch"
            type="text"
            placeholder="Search for the movie here!"
          />
        </div>
      </div>
      <div class="results">
        <div
          class="result-item"
          v-for="gettersmovie in gettersfilteredmovies"
          :key="gettersmovie.id"
        >
          <div class="result-title">
            <b>Title:</b><br />{{ gettersmovie.title }}
          </div>
          <div class="result-link">
            <b>Link:</b><br /><a
              v-bind:href="'https://www.justwatch.com' + gettersmovie.full_path"
              target="_blank"
              >Go to Movie</a
            >
          </div>
          <div class="result-type">
            <b>Cinema release date:</b><br />{{ gettersmovie.cinema_release_date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myStore",
  data() {
    return {
      msg: "Welcome to our Movie Database",
    };
  },
  computed: {
    gettersmovies() {
      return this.$store.getters.allMovies.items;
    },
    gettersfilteredmovies() {
        return this.$store.getters.filteredMovies;
    },
    getterssearch() {
        return this.$store.getters.search; 
    }
 },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    showSearch(e) {
      this.$store.dispatch("setSearch", e.target.value)
      .then(()=>{
          this.$store.dispatch("setFilteredMovies");
      });
    },
  },
};
</script>