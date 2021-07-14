<template>
  <div class="hello">
    <header>
      <h1>{{ msg }}</h1>
    </header>

    <div class="search-and-results">
      
      <div class="searcharea">
        <div class="input-container">
          <input
            type="text"
            placeholder="Search for the movie here!"
          />
        </div>
      </div>
      <div class="results">
          
        <div class="result-item" v-for="gettersmovie in gettersmovies" :key="gettersmovie.id">
          <div class="result-title"><b>Title:</b><br>{{ gettersmovie.name }}</div> <div class="result-link"><b>Link:</b><br>https://www.justwatch.com/{{ gettersmovie.website }}</div>
          <div class="result-type"><b>Type:</b><br>{{ gettersmovie.company.name }}</div>
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
      return this.$store.getters.allMovies;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },

};
</script>