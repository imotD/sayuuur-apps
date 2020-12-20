<template>
  <div>
    <b-card
      :title="product.nama"
      :img-src="require('../assets/img/' + product.gambar)"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text> Harga : Rp {{ product.harga }} </b-card-text>

      <b-button href="#" variant="success"><b-icon-cart4></b-icon-cart4>  Pesan</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style lang="scss" scoped></style>
