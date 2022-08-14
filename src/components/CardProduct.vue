<template>
  <div>
    <b-card
      :title="product.nama"
      :img-src="require('../assets/img/' + product.gambar)"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text> Harga : Rp. {{ product.harga }} </b-card-text>
      <b-card-text> Stock : {{ product.stock }} </b-card-text>
      <b-button
        :to="'/foods/' + product.id"
        variant="success"
        :disabled="!inStock"
      >
        <b-icon-cart4></b-icon-cart4>
        Pesan
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product", "stock"],
  computed: {
    inStock() {
      return this.stock > 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
