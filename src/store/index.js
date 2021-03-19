import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    loadProducts(context) {
      return fetch("products.json")
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          context.commit("setProducts", obj.groups);
        })
        .catch((error) => {
          console.log(error);
          Promise.reject(error);
        });
    },
  },
});
