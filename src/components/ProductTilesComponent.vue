<template>
  <div class="product-tiles-component container">
    <main class="grid">
      <article v-for="(list, index) in getProductSaleList" :key="index">
        <img
          class="product-image"
          :src="`${list.hero.href}`"
          :alt="list.hero.alt"
          @click="showCarosalModal(list)"
          v-show="list.hero.href"
        />
        <div class="text">
          <h3 class="product-name">{{ list.name }}</h3>
          <div v-if="list.price">
            <p class="regular-price">
              <strong>Regular price:</strong>
              ${{ getPrice(list.price, "regular") }}
            </p>
            <p class="selling-price">
              <strong>Selling price:</strong>
              ${{ getPrice(list.price, "selling") }}
            </p>
          </div>
          <div v-if="list.priceRange && list.priceRange.selling">
            <p class="price-range">
              <strong>Price:</strong>
              ${{ getPrice(list.priceRange.selling, "low") }} - ${{
                getPrice(list.priceRange.selling, "high")
              }}
            </p>
            <p v-if="list.priceRange.type" class="special-price">
              Special Savings
            </p>
          </div>
        </div>
      </article>
    </main>
    <carousel-component
      ref="carousel"
      v-if="showModal"
      @close="showModal = false"
      :images="images"
    />
  </div>
</template>

<script>
import CarouselComponent from "./CarouselComponent.vue";
export default {
  name: "product-tiles-component",
  data() {
    return {
      showModal: false, //default
      images: [],
    };
  },
  components: {
    CarouselComponent,
  },
  computed: {
    getProductSaleList() {
      return this.$store.state.products; // get the products list from state.
    },
  },
  created() {
    this.$store.dispatch("loadProducts"); // loading products using action call from store
  },
  methods: {
    showCarosalModal: function (list) {
      this.showModal = true; // to show modal
      let self = this;
      self.images = list.images; // each modal
    },
    getPrice: function (price, range) {
      const priceRange = parseFloat(price[range].toFixed(0)).toLocaleString();
      return priceRange; // removing decimal and fixed the value to nearest and value is formatting using toLocalString().
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }
}
@media only screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid > article img {
  width: 100%;
}

.grid .text {
  padding: 20px;
}
.special-price,
.selling-price {
  color: red;
}
</style>
