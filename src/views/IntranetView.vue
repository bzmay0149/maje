<template>
  <div class="mt-5">
    <div class="link_intranet mb-5 d-flex justify-content-evenly ">
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
      :class=" { active: mostrarAgregarCliente }"
    >
      Agregar Cliente
    </button>
    <button class="logout" @click="logout">Cerrar sesión</button>
  </div>


    <Clientes v-show="mostrarClientes" />
    <AddCustomer v-show="mostrarAgregarCliente" />
  </div>
</template>

<style scope>
#agregar_clientes {
  padding: 10px 30px;
  border-radius: 5px;
  background-color:#943718 ;
  color: aliceblue;
  font-size: x-large;
}
#agregar_clientes:hover {
    background-color: #f6cea1;
    color: #943718;

  }

.logout:hover{
  background-color: #f6cea1;
    color: #943718;
}

#clientes:hover{
  background-color: #f6cea1;
    color: #943718;
}


.logout {
  padding: 10px 30px;
border-radius: 5px;
background-color:#943718 ;
color: aliceblue;
font-size: x-large;
}

#clientes{
  padding: 10px 30px;
  border-radius: 5px;
  background-color:#943718 ;
  color: aliceblue;
  font-size: x-large;
}


</style>

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




