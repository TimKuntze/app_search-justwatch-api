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
      <div class="results" v-if="gettersfilteredmovies.length">
        <div 
          class="result-item"
          v-for="gettersmoviesearch in gettersfilteredmovies"
          :key="gettersmoviesearch.id"
        >
          <div class="result-title">
            <b>Title:</b><br />{{ gettersmoviesearch.title }}
          </div>
          <div class="result-link">
            <b>Link:</b><br /><a
              v-bind:href="'https://www.justwatch.com' + gettersmoviesearch.full_path"
              target="_blank"
              >Go to JustWatch</a
            >
          </div>

        </div>
      </div>
      <div class="results" v-else>
        <div 
          class="result-item"
          v-for="gettersmovielist in gettersmovies"
          :key="gettersmovielist.id"
        >
          <div class="result-title">
            <b>Title:</b><br />{{ gettersmovielist.title }}
          </div>
          <div class="result-link">
            <b>Link:</b><br /><a
              v-bind:href="'https://www.justwatch.com' + gettersmovielist.full_path"
              target="_blank"
              >Go to JustWatch</a
            >
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