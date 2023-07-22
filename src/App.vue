<template>
  <NavComp />

  <router-view />
  <FooterComp />
</template>
<script setup>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  min-height: 100vh;
}

nav {
  padding: 30px;
}
</style>
