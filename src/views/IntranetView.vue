<script setup>


</script>

<template>
  <div class="formulario_registro_cliente container">
    <h2 class="text-center">Agregar nuevo cliente</h2>

    <form class="form-group mt-5 d-flex flex-column w-50 mx-auto" action="">
      <div class="nombre">
        <label class="form-label" for="nombre">Nombre</label>
        <input class="form-control" type="text" name="nombre" id="nombre" />
      </div>

      <div class="numero_telefonico">
        <label class="form-label" for="numero_telefonico"
          >Numero de telefono</label
        >
        <input
          class="form-control"
          type="text"
          name="numero_telefonico"
          id="numero"
        />
      </div>

      <div class="correo">
        <label class="form-label" for="correo">Correo</label>
        <input class="form-control" type="email" name="correo" id="correo" />
      </div>

      <div class="fecha">
        <label class="form-label" for="fecha">Fecha</label>
        <input class="form-control date" type="date" name="fecha" id="fecha" />
      </div>

      <div class="descripcion mt-5">
        <textarea
          class="form-control"
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="10"
          placeholder="Servicios reqqueridos"
        ></textarea>
      </div>

      <div class="selectores row pb-5 justify-content-center">

      <div class="presupuesto_enviado col-sm-5">
        <h3 class="py-5">Presupuesto enviado</h3>

        <select class="w-25" name="presupuesto_enviado" id="presupuesto_enviado">
          <option value="">Seleccionar...</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="presupuesto_aceptado col-sm-5 ">
        <h3 class="py-5">Presupuesto aceptado</h3>

        <select class="w-25" name="presupuesto_aceptado" id="presupuesto_aceptado">
          <option value="">Seleccionar...</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="Realizado col-sm-5 ">
        <h3 class="py-5">Realizado</h3>

        <select class="w-25" name="realizado" id="realizado">
          <option value="">Seleccionar...</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="Facturado col-sm-5 ">
        <h3 class="py-5">Facturado</h3>

        <select class="w-25" name="facturado" id="facturado">
          <option value="">Seleccionar...</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

    </div>
    </form>
  </div>
</template>






