<template>
  <div class="home">
    <Navbar />
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
          <CardProduct :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3030/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal Coy : ", error));
  },
};
</script>
