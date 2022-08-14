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
                updateCart ? updateCart.length : jumlah_pesanans.length
              }}</b-badge>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Service from "@/services/service.js";
export default {
  name: "Navbar",
  components: {},
  props: ["updateCart"],
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    Service.getCart()
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log("Gagal Coy : ", error));
  },
};
</script>

<style lang="scss" scoped></style>
