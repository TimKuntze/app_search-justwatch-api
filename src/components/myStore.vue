<template>
  <div class="hello">
    <header>
      <h1>{{ msg }}</h1>
    </header>

    <div class="search-and-results">
      
        <div class="input-container">
          <input
            class="search"
            type="text"
            placeholder="Search for the movie here!"
          />
        </div>
      
      <div class="results">
        <div v-for="gettersmovie in gettersmovies" :key="gettersmovie.id">
          {{ gettersmovie.id }} {{ gettersmovie.title }}
          {{ gettersmovie.address }}
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