<template>
  <div class="formulario_registro_cliente container">
    <h2 class="text-center">Agregar nuevo cliente</h2>

    <form class="form-group mt-5 d-flex flex-column w-50 mx-auto" @submit.prevent="submitForm">
      <div class="nombre">
        <label class="form-label" for="nombre">Nombre</label>
        <input class="form-control" v-model="formulario.nombre" type="text" name="nombre" id="nombre" />
      </div>
      <div class="nombre">
        <label class="form-label" for="nombre">apellido</label>
        <input class="form-control" v-model="formulario.apellido" type="text" name="apellido" id="apellido" />
      </div>

      <div class="numero_telefonico">
        <label class="form-label" for="numero_telefonico">Numero de telefono</label>
        <input class="form-control" v-model="formulario.numero_telefonico" type="text" name="numero_telefonico" id="numero" />
      </div>

      <div class="correo">
        <label class="form-label" for="correo">Direccion</label>
        <input class="form-control" v-model="formulario.direccion" type="text" name="direccion" id="direccion" />
      </div>
      <div class="correo">
        <label class="form-label" for="correo">Provincia</label>
        <input class="form-control" v-model="formulario.provincia" type="text" name="provincia" id="provincia" />
      </div>
      <div class="nombre">
        <label class="form-label" for="nombre">Ciudad</label>
        <input class="form-control" v-model="formulario.ciudad" type="text" name="ciudad" id="ciudad" />
      </div>
      <div class="correo">
        <label class="form-label" for="correo">codigo postal</label>
        <input class="form-control" v-model="formulario.codigo_postal" type="text" name="codigo-postal" id="codigo_postal" />
      </div>
      <div class="correo">
        <label class="form-label" for="correo">Correo</label>
        <input class="form-control" v-model="formulario.correo" type="email" name="correo" id="correo" />
      </div>

      <div class="fecha">
        <label class="form-label" for="fecha">Fecha</label>
        <input class="form-control date" v-model="formulario.fecha" type="date" name="fecha" id="fecha" />
      </div>

      <div class="descripcion mt-5">
        <textarea class="form-control" v-model="formulario.descripcion" name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Servicios requeridos"></textarea>
      </div>

      <div class="selectores row pb-5 justify-content-center">
        <div v-for="campo in campos" :key="campo.nombre" :class="campo.clase">
          <h3 class="py-5">{{ campo.titulo }}</h3>
          <select class="w-25" :name="campo.nombre" v-model="formulario[campo.nombre]">
            <option value="">Seleccionar...</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <button @click="submitForm" type="submit" class="btn btn-primary mt-5">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const campos = [
  { nombre: "presupuesto_enviado", titulo: "Presupuesto enviado", clase: "col-sm-5" },
  { nombre: "presupuesto_aceptado", titulo: "Presupuesto aceptado", clase: "col-sm-5" },
  { nombre: "realizado", titulo: "Realizado", clase: "col-sm-5" },
  { nombre: "facturado", titulo: "Facturado", clase: "col-sm-5" },
];

const formulario = ref({
  nombre: "",
  apellido: "",
  numero_telefonico: "",
  correo: "",
  direccion:"",
  codigo_postal: "",
  ciudad: "",
  provincia: "",
  fecha: "",
  descripcion: "",
  presupuesto_enviado: "",
  presupuesto_aceptado: "",
  realizado: "",
  facturado: "",

});


const submitForm = async () => {
 try {
  const response = await axios.post("http://127.0.0.1:5000/add",
  {
    nombre: formulario.value.nombre,
    apellido: formulario.value.apellido,
    numero_telefonico: formulario.value.numero_telefonico,
    correo: formulario.value.correo,
    direccion: formulario.value.direccion,
    codigo_postal: formulario.value.codigo_postal,
    ciudad: formulario.value.ciudad,
    provincia: formulario.value.provincia,
    fecha: formulario.value.fecha,
    descripcion: formulario.value.descripcion,
    presupuesto_enviado: formulario.value.presupuesto_enviado,
    presupuesto_aceptado: formulario.value.presupuesto_aceptado,
    realizado: formulario.value.realizado,
    facturado: formulario.value.facturado
  });
  
 } catch (error) {
  console.log(error);
 }
}
</script>
