<template>
  <div>
    <Navbar :updateCart="keranjangs" />
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row class="mt-4">
        <b-col>
          <h2>Keranjang <strong>Saya </strong></h2>
        </b-col>
      </b-row>
      <b-row>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, i) in keranjangs" :key="cart.id">
              <th scope="row">{{ i + 1 }}</th>
              <td>
                <b-img
                  :src="require(`@/assets/img/${cart.product.gambar}`)"
                  fluid
                  width="70"
                  alt="image"
                ></b-img>
              </td>
              <td>
                <strong>{{ cart.product.nama }} </strong>
              </td>
              <td>{{ cart.keterangan ? cart.keterangan : "-" }}</td>
              <td>{{ cart.jumlah_pemesanan }}</td>
              <td>Rp. {{ cart.product.harga }}</td>
              <td>
                <strong
                  >RP. {{ cart.product.harga * cart.jumlah_pemesanan }}
                </strong>
              </td>
              <td>
                <b-icon-trash @click="hapusKeranjang(cart.id)"></b-icon-trash>
              </td>
            </tr>
            <tr>
              <td colspan="6" align="right">
                <strong>Total Harga : </strong>
              </td>
              <td>
                <strong>Rp. {{ totalHarga }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Food",
          to: "/foods",
        },
        {
          text: "Cart",
          active: true,
        },
      ],
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(params) {
      this.keranjangs = params;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.info("Sukses telah terhapus", {
            type: "info",
            position: "top-right",
            duration: 3000,
            dismissible: "true",
          });
          // update
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log("Gagal Coy : ", error));
        })
        .catch((error) => console.log("Gagal Coy : ", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log("Gagal Coy : ", error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function(item, data) {
        return item + data.product.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
