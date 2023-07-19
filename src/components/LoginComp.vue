<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

// Variables reactivas para almacenar los datos de los campos de entrada
const username = ref("");
const password = ref("");

// Obtener la instancia de Vue Router
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/login", {
      username: username.value,
      password: password.value,
    });

    const token = response.data;
    console.log(token);

    Cookies.set("token", token);
    router.push("/intranet");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="w-100 mx-auto mb-5 container-lg p-lg-5 ">
    <h3 class="mt-5">Login Administrador</h3>

    <div class="formulario  d-flex flex-column gap-3 w-50 mx-auto mt-5 border border-4 shadow p-5">

      <label class="form-label fs-2" for="username">Nombre de usuario</label>
      <input name="username" type="text" v-model="username" />

      <label class="form-label fs-2" for="password">Contraseña</label>
      <input class="input-password" name="password" type="password" v-model="password" />

      <button class="mt-5" @click="handleSubmit">Login</button>

    </div>
  </div>
</template>

<style scoped>
.login {
  background-color: #f6cea1;
}
input[type="submit"] {
  background-color: rgb(75, 15, 15);
  color: #f6cea1;
  width: 50%;
}
</style>
