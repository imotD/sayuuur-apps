<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" class="brand text-success">
        Sayuuur
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Beranda</b-nav-item>
          <b-nav-item to="/foods">Makanan</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/cart">
              Keranjang
              <b-icon-bag class="mr-1"></b-icon-bag>
              <b-badge variant="danger">{{
                updateCart ? updateCart.length : cartLength
              }}</b-badge>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  props: ["updateCart"],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("cart/getCart");
  },
  computed: {
    cartLength() {
      return this.$store.getters["cart/cartLength"];
    },
  },
};
</script>

<style scoped>
.brand {
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
