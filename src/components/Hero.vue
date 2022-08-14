<template>
  <div>
    <b-row class="my-4">
      <b-col>
        <h2 class="mb-4">
          <strong>Produk Segar dan Sehat </strong>Langsung dari Petani
        </h2>
        <b-button to="/foods" variant="outline-primary"
          ><b-icon-arrow-right class="mr-1"></b-icon-arrow-right
          >Button</b-button
        >
      </b-col>
      <b-col>
        <b-img
          :src="require('../assets/img/bakso.jpg')"
          fluid
          alt="img"
        ></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped></style>
