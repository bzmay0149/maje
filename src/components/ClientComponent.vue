<script setup>
import axios from "axios";
import { ref } from "vue";

const clientes = ref([]);
const clienteSeleccionado = ref(null);
const Budget = ref(null);
const accepted_budget = ref(null);
const done = ref(null);
const invoiced = ref(null);

const obtenerClientes = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000");
    clientes.value = response.data;

    Budget.value = response.data[2].budget;
    console.log(Budget.value);

    accepted_budget.value = response.data[2].accepted_budget;
    console.log(accepted_budget.value);

    done.value = response.data[2].done;
    console.log(done.value);

    invoiced.value = response.data[2].invoiced;
    console.log(invoiced.value);
  } catch (error) {
    console.log(error);
  }
};

const expandirCliente = (index) => {
  if (clienteSeleccionado.value === index) {
    clienteSeleccionado.value = null;
  } else {
    clienteSeleccionado.value = index;
  }
};
const indexIsValid = (index) => {
  return index >= 0 && index < clientes.value.length;
};

const eliminarCliente = async (index) => {
  if (indexIsValid(index)) {
    const clienteId = clientes.value[index].idcustomer;
    console.log("ID del cliente a eliminar:", clienteId);

    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/delete/${clienteId}`
      );

      // Eliminar el cliente de la lista local en el frontend
      clientes.value.splice(index, 1);
    } catch (error) {
      console.log(error);
    }
  }
};
//////////////////////// actualizar inputs /////////////////////////

const guardarCambios = async () => {
  const cliente = clientes.value[clienteSeleccionado.value];
  try {
    await axios.put(`http://127.0.0.1:5000/update/${cliente.idcustomer}`, cliente);
  } catch (error) {
    console.log(error);
  }
};
obtenerClientes();
</script>

<template>
  <div>
    <table class="table">
      <!-- ... Your table headers ... -->
      <tbody class="table-border-bottom-0">
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.name }}</td>
          <td>{{ cliente.lastname }}</td>
          <td>{{ cliente.phone }}</td>
          <td>{{ cliente.email }}</td>
          <!-- ... Other table data ... -->
          <td class="d-flex justify-content-around">
            <button class="w-25" @click="expandirCliente(index)">
              {{ clienteSeleccionado === index ? "ocultar" : "mostrar" }}
            </button>
            <button
              class="w-25"
              @click="eliminarCliente(index)"
              v-if="indexIsValid(index)"
            >
              Eliminar
            </button>
            <button class="w-25" @click="modificarCliente(index)">
              Modificar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table w-100">
      <tr class="" v-if="clienteSeleccionado !== null">
        <td colspan="5">
          <table class="table d-flex justify-content-around">
            <tr class="d-flex flex-column">
              <th>Dirección</th>
              <td>{{ clientes[clienteSeleccionado].address }}</td>
            </tr>
            <tr class="d-flex flex-column">
              <th>Ciudad</th>
              <td>{{ clientes[clienteSeleccionado].city }}</td>
            </tr>
            <tr class="d-flex flex-column">
              <th>Provincia</th>
              <td>{{ clientes[clienteSeleccionado].province }}</td>
            </tr>
            <tr class="d-flex flex-column">
              <th>Código postal</th>
              <td>{{ clientes[clienteSeleccionado].postal_code }}</td>
            </tr>
            <tr class="d-flex flex-column">
              <th>Presupuesto enviado</th>
              <td>
                <input
                  type="radio"
                  id="enviado-si"
                  value="yes"
                  v-model="clientes[clienteSeleccionado].budget"
                  @change="guardarCambios"
                />
                <label for="enviado-si">Sí</label>
                <input
                  type="radio"
                  id="enviado-no"
                  value="no"
                  v-model="clientes[clienteSeleccionado].budget"
                  @change="guardarCambios"
                />
                <label for="enviado-no">No</label>
              </td>
            </tr>

            <!-- Presupuesto aceptado -->
            <tr class="d-flex flex-column">
              <th>Presupuesto aceptado</th>
              <td>
                <input
                  type="radio"
                  id="aceptado-si"
                  value="yes"
                  v-model="clientes[clienteSeleccionado].accepted_budget"
                  @change="guardarCambios"
                />
                <label for="aceptado-si">Sí</label>
                <input
                  type="radio"
                  id="aceptado-no"
                  value="no"
                  v-model="clientes[clienteSeleccionado].accepted_budget"
                  @change="guardarCambios"
                />
                <label for="aceptado-no">No</label>
              </td>
            </tr>

            <!-- Finalizado -->
            <tr class="d-flex flex-column">
              <th>Finalizado</th>
              <td>
                <input
                  type="radio"
                  id="finalizado-si"
                  value="yes"
                  v-model="clientes[clienteSeleccionado].done"
                  @change="guardarCambios"
                />
                <label for="finalizado-si">Sí</label>
                <input
                  type="radio"
                  id="finalizado-no"
                  value="no"
                  v-model="clientes[clienteSeleccionado].done"
                  @change="guardarCambios"
                />
                <label for="finalizado-no">No</label>
              </td>
            </tr>

            <!-- Facturado -->
            <tr class="d-flex flex-column">
              <th>Facturado</th>
              <td>
                <input
                  type="radio"
                  id="facturado-si"
                  value="yes"
                  v-model="clientes[clienteSeleccionado].invoiced"
                  @change="guardarCambios"
                />
                <label for="facturado-si">Sí</label>
                <input
                  type="radio"
                  id="facturado-no"
                  value="no"
                  v-model="clientes[clienteSeleccionado].invoiced"
                  @change="guardarCambios"
                />
                <label for="facturado-no">No</label>
              </td>
            </tr>

            <tr class="d-flex flex-column">
              <th>Fecha</th>
              <td>{{ clientes[clienteSeleccionado].date }}</td>
            </tr>
            <tr class="d-flex flex-column">
              <th>Descripción</th>
              <td>{{ clientes[clienteSeleccionado].description }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
