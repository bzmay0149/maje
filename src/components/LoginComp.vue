<script setup>
import { ref } from "vue";
import axios from "axios";
import cors from "cors";

cors();

cors(axios);

// Variables reactivas para almacenar los datos de los campos de entrada
const username = ref("");
const password = ref("");

const handleSubmit = async () => {
  try {
    await axios.post("http://127.0.0.1:5000/login", {
      username: username.value,
      password: password.value,
    });

    console.log("user", username.value);
    console.log("password", password.value);
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="w-50 mx-auto mb-5">
    <h3 class="mt-5">Login Administrador</h3>

    <div class="formulario">
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <button @click="handleSubmit">Login</button>
    </div>
    
  </div>
</template>

<style scoped>
.login {
  background-color: #dc6d3e;
}
</style>
