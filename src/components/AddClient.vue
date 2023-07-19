<script setup>
import { ref } from "vue";
const formulario = ref({
  nombre: "",
  numero_telefonico: "",
  correo: "",
  fecha: "",
  descripcion: "",
  presupuesto_enviado: "",
  presupuesto_aceptado: "",
  realizado: "",
  facturado: "",
});

const mostrarDatosIntroducidos = ref(false);

const submitForm = () => {
  mostrarDatosIntroducidos.value = true;
};
console.log(formulario);


</script>
<template>
    <div class="formulario_registro_cliente container">
      <h2 class="text-center">Agregar nuevo cliente</h2>
  
      <form
        class="form-group mt-5 d-flex flex-column w-50 mx-auto"
        @submit.prevent="submitForm"
      >
        <div class="nombre">
          <label class="form-label" for="nombre">Nombre</label>
          <input
            class="form-control"
            v-model="formulario.nombre"
            type="text"
            name="nombre"
            id="nombre"
          />
        </div>
  
        <div class="numero_telefonico">
          <label class="form-label" for="numero_telefonico"
            >Numero de telefono</label
          >
          <input
            class="form-control"
            v-model="formulario.numero_telefonico"
            type="text"
            name="numero_telefonico"
            id="numero"
          />
        </div>
  
        <div class="correo">
          <label class="form-label" for="correo">Correo</label>
          <input
            class="form-control"
            v-model="formulario.correo"
            type="email"
            name="correo"
            id="correo"
          />
        </div>
  
        <div class="fecha">
          <label class="form-label" for="fecha">Fecha</label>
          <input
            class="form-control date"
            v-model="formulario.fecha"
            type="date"
            name="fecha"
            id="fecha"
          />
        </div>
  
        <div class="descripcion mt-5">
          <textarea
            class="form-control"
            v-model="formulario.descripcion"
            name="descripcion"
            id="descripcion"
            cols="30"
            rows="10"
            placeholder="Servicios requeridos"
          ></textarea>
        </div>
  
        <div class="selectores row pb-5 justify-content-center">
          <div class="presupuesto_enviado col-sm-5">
            <h3 class="py-5">Presupuesto enviado</h3>
  
            <select
              class="w-25"
              name="presupuesto_enviado"
              id="presupuesto_enviado"
              v-model="formulario.presupuesto_enviado"
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
  
          <div class="presupuesto_aceptado col-sm-5">
            <h3 class="py-5">Presupuesto aceptado</h3>
  
            <select
              class="w-25"
              name="presupuesto_aceptado"
              id="presupuesto_aceptado"
              v-model="formulario.presupuesto_aceptado"
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
  
          <div class="Realizado col-sm-5">
            <h3 class="py-5">Realizado</h3>
  
            <select
              class="w-25"
              name="realizado"
              id="realizado"
              v-model="formulario.realizado"
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
  
          <div class="Facturado col-sm-5">
            <h3 class="py-5">Facturado</h3>
  
            <select
              class="w-25"
              name="facturado"
              id="facturado"
              v-model="formulario.facturado"
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mt-5">Enviar</button>
      </form>
      
      <!-- Mostrar los datos introducidos -->
      <div class="datos-introducidos mt-5" v-if="mostrarDatosIntroducidos">
        <h3>Datos introducidos:</h3>
        <p>Nombre: {{ formulario.nombre }}</p>
        <p>Número de teléfono: {{ formulario.numero_telefonico }}</p>
        <p>Correo: {{ formulario.correo }}</p>
        <p>Fecha: {{ formulario.fecha }}</p>
        <p>Descripción: {{ formulario.descripcion }}</p>
        <p>Presupuesto enviado: {{ formulario.presupuesto_enviado }}</p>
        <p>Presupuesto aceptado: {{ formulario.presupuesto_aceptado }}</p>
        <p>Realizado: {{ formulario.realizado }}</p>
        <p>Facturado: {{ formulario.facturado }}</p>
      </div>
    </div>
  </template>