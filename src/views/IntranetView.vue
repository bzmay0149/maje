<template>
  <div>
    <button
      id="clientes"
      @click="handlemostrarclientes"
      :class="{ active: mostrarClientes }"
    >
      Clientes
    </button>
    <button
      id="agregar_clientes"
      @click="handlemostrarAgregarCliente"
      :class="{ active: mostrarAgregarCliente }"
    >
      Agregar Cliente
    </button>
    <button @click="logout">Cerrar sesión</button>

    <Clientes v-show="mostrarClientes" />
    <AddCustomer v-show="mostrarAgregarCliente" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddCustomer from '../components/AddClient.vue';
import Clientes from '../components/ClientComponent.vue';
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

const router = useRouter();


const logout = () => {
  Cookies.remove("token");
  router.push("/login");
};

const mostrarClientes = ref(true);
const mostrarAgregarCliente = ref(false);

function handlemostrarclientes() {
  mostrarClientes.value = true;
  mostrarAgregarCliente.value = false;
}

function handlemostrarAgregarCliente() {
  mostrarClientes.value = false;
  mostrarAgregarCliente.value = true;
}
</script>




