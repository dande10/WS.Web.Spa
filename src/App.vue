<template>
  <div id="app">
    <product-tiles-component />
  </div>
</template>

<script>
import ProductTilesComponent from "./components/ProductTilesComponent.vue";
export default {
  name: "App",
  components: {
    ProductTilesComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
