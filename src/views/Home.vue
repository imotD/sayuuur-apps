<template>
  <div class="home">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  },
};
</script>
