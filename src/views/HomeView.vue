<template>
  <div class="home">
    <FormContact />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <FooterComp/>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterComp from '@/components/FooterComp.vue'

import FormContact from '@/components/FromContact.vue'

</script>
