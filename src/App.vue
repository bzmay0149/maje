<template>
 
   <NavComp />
 


   
 
  <router-view/>
</template>
<script setup>
import NavComp from './components/NavComp.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  
}

nav {
  padding: 30px;
}




</style>
