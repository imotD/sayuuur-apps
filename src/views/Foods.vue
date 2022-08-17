<template>
  <div>
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
          <CardProduct :product="product" :stock="product.stock" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Foods",
  components: {
    CardProduct,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchFood() {
      this.$store.dispatch("product/getSearchProduct", this.search);
    },
  },
  mounted() {
    this.$store.dispatch("product/getProducts");
  },
  computed: {
    products() {
      return this.$store.state.product.products;
    },
  },
};
</script>
