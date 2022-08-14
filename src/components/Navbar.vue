<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand to="/">Sayuuur</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Beranda</b-nav-item>
          <b-nav-item to="/foods">Makanan</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
                    <b-form-input
                      size="sm"
                      class="mr-sm-2"
                      placeholder="Search"
                    ></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit"
                      >Search</b-button
                    >
                  </b-nav-form> -->

          <b-navbar-nav>
            <b-nav-item to="/cart">
              Keranjang
              <b-icon-bag class="mr-1"></b-icon-bag>
              <b-badge variant="danger">{{
                updateCart ? updateCart.length : cartLength
              }}</b-badge>
            </b-nav-item>
          </b-navbar-nav>
          <b-nav-item to="/create-food">Add Makanan</b-nav-item>
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
    this.$store.dispatch("getCart");
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
  },
};
</script>

<style lang="scss" scoped></style>
