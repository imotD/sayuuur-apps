<template>
  <div>
    <Navbar />
    <b-container>
      <b-row class="mt-4">
        <b-col>
          <h2>Daftar <strong>Makanan</strong></h2>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-input-group>
            <b-form-input
              v-model="search"
              placeholder="Cari makanan"
              @keyup="searchFood"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="info"
                ><b-icon-search></b-icon-search
              ></b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mb-3">
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
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3030/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log("Gagal Coy : ", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3030/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log("Gagal Coy : ", error));
  },
};
</script>
