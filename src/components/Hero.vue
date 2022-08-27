<template>
  <div class="min-hight d-flex align-items-center position-relative">
    <div class="bg"></div>
    <b-container fluid="md">
      <b-row align-self="center" class="text-white">
        <b-col>
          <h2 class="mb-4 text-white">
            <strong>
              Produk Segar dan Sehat <br />
              <span class="text-success">Langsung</span> dari Petani
            </strong>
          </h2>
          <p>Belanja jadi makin aman dan mudah</p>
        </b-col>
      </b-row>
      <b-row class="text-white">
        <b-col>
          <b-input-group class="mb-2">
            <b-form-input
              v-model="search"
              class="py-2"
              placeholder="Cari makanan"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="success"
                ><b-icon-search></b-icon-search
              ></b-button>
            </b-input-group-append>
          </b-input-group>
          <p>
            Trending:
            <a class="text-white font-weight-bold" href="#">cabe merah</a>,
            <a class="text-white font-weight-bold" href="#">kol</a>,
            <a class="text-white font-weight-bold" href="#">telur</a>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
.min-hight {
  height: 90vh;
}

.bg {
  z-index: 0;
  background-image: url("../assets/img/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90vh;
  position: absolute;
}
</style>
