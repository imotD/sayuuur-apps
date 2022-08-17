<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-img
            :src="require('../assets/img/' + product.gambar)"
            fluid
            alt="image"
          ></b-img>
        </b-col>
        <b-col cols="6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </h4>
          <b-form @submit.prevent>
            <b-form-group label="Jumlah Pesanan">
              <b-form-input
                v-model="pesan.jumlah_pemesanan"
                type="number"
                placeholder="Masukan"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Keterangan">
              <b-form-textarea
                v-model="pesan.keterangan"
                placeholder="ex : Pedes , Nasi setengah"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart4></b-icon-cart4>
              Pesan
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FoodDetail",
  components: {},
  props: ["id"],
  data() {
    return {
      pesan: this.createFreshEventObject(),
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
          text: "Food Order",
          active: true,
        },
      ],
    };
  },

  methods: {
    createFreshEventObject() {
      return {
        jumlah_pemesanan: "",
        keterangan: "",
      };
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.product = this.product;
        this.$store
          .dispatch("cart/OrderFood", this.pesan)
          .then(() => {
            this.$router.push({ path: "/cart" });
            this.$toast.success("Berhasil masuk keranjang.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: "true",
            });
            this.createFreshEventObject();
          })
          .catch((error) => console.log("Gagal Coy : ", error));
      } else {
        this.$toast.error("Jumlah Pesanan harus diiisi.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: "true",
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch("product/getProductDetail", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product.productDetail;
    },
  },
};
</script>

<style lang="scss" scoped></style>
