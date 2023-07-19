<script setup>
import axios from "axios"
import { ref } from "vue";

const clientes = ref([]);

const obtenerClientes = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000");
    clientes.value = response.data;
    console.log(clientes.value);
  } catch (error) {
    console.log(error);
  }
}
obtenerClientes();
</script>


<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Provincia</th>
            <th>Código Postal</th>
            <th>Presupuesto</th>
            <th>Aceptado</th>
            <th>Facturador</th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0">
          <tr v-for="(cliente, index) in clientes" :key="index">
            <td>{{ cliente.name }}</td>
            <td>{{ cliente.lastname }}</td>
            <td>{{ cliente.phone }}</td>
            <td>{{ cliente.phone }}</td>
            <td>{{ cliente.email }}</td>
            <td>{{ cliente.address }}</td>
            <td>{{ cliente.city }}</td>
            <td>{{ cliente.province }}</td>
            <td>{{ cliente.postal_code }}</td>
            <td>{{ cliente.budget }}</td>
            <td>{{ cliente.accepted_budget }}</td>
            <td>{{ cliente.date }}</td>
            <td>{{ cliente.done }}</td>
            <td>{{ cliente.invoiced }}</td>
            <td>
              <button @click="eliminarCliente(index)">Eliminar</button>
              <button @click="modificarCliente(index)">Modificar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>