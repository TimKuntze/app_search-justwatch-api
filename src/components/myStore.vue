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
            @keypress="searchMovie"
            type="text"
            placeholder="Search for the movie here!"
          />
        </div>
      </div>
      <div class="results">
        <div
          class="result-item"
          v-for="gettersmovie in gettersmovies"
          :key="gettersmovie.id"
        >
          <div class="result-title">
            <b>Title:</b><br />{{ gettersmovie.title }}
          </div>
          <div class="result-link">
            <b>Link:</b><br />https://www.justwatch.com{{
              gettersmovie.full_path
            }}
          </div>
          <div class="result-type">
            <b>Type:</b><br />{{ gettersmovie.object_type }}
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
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    searchMovie(e) {
      this.$store.commit("searchMovie", e.target.value);
      
    },
  },
};
</script>