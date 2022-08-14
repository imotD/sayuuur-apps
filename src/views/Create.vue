<template>
  <div class="home">
    <b-container>
      <b-row class="align-items-center">
        <b-col
          ><h2>Buat <strong>Menu Baru</strong></h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col> {{ data }} </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        // id: "",
        // kode: "",
        nama: "",
        harga: null,
        stock: null,
        gambar: "",
      },
    };
  },
  computed: {
    ...mapState(["data"]),
  },
};
</script>

<style lang="sass" scoped>
</style>