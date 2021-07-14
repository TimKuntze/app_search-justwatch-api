<template>
  <div class="app" id="app">
    <my-store></my-store>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyStore from "./components/myStore.vue";

@Component({
  components: {
    MyStore,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  margin: 0;
  padding: 0;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1;
  /* Firefox */
}

body {
  display: flex;
  flex-direction: column;
  grid-template-rows: 150px 1fr;
  background-color: #f5f5f5;
  font-family: "Roboto Slab", serif;
  margin-bottom: 10px;
}

h1 {
  place-self: center;
  font-size: 42px;
}

header {
  display: grid;
  color: white;
  background: #3f314b;
  padding: 32px;
}

.search-and-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.searcharea {
  display: flex;
  justify-content: center;
}

.input-container {
  border-radius: 5px;
  background: #677482;
  padding: 10px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 40%; 
}

.input-container input {
  border: none;
  background: transparent;
  color: white;
  padding: 6px 15px;
  font-size: 18px;
  height: 100%;
  width: 100%; 
}

.results {
  padding: 64px; 
  text-align: left;
}

.result-item {
  margin-bottom: 32px; 
  padding: 8px; 
  border: 1px solid black; 
  border-radius: 5px;
}

</style>
