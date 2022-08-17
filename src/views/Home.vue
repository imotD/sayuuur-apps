<template>
  <div class="home">
    <b-container>
      <Hero />
      <b-row class="align-items-center">
        <b-col
          ><h2>Best <strong>Foods</strong></h2>
        </b-col>
        <b-col>
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye> </b-icon-eye> Lihat Semua
          </router-link>
        </b-col>
      </b-row>
      <!-- line -->
      <b-row>
        <b-col
          cols="4"
          class="mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" :stock="product.stock" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Home",
  components: {
    Hero,
    CardProduct,
  },
  data() {
    return {
      // products: [],
    };
  },
  mounted() {
    this.$store.dispatch("getProductBest");
  },
  computed: {
    products() {
      return this.$store.state.bestProduct;
    },
  },
};
</script>
