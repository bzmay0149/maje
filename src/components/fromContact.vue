<template>
    <div>
        <form action="#" method="GET">
      <h2 class="form-header">Formulario de contacto</h2>
      <label for="name">Nombre *</label>
      <input
        class="form-input"
        type="text"
        id="name"
        name="name"
        required
      />

      <label for="apellido">Apellido *</label>
      <input
        class="form-input"
        type="text"
        id="apellido"
        name="apellido"
        required
      />

      <label for="email">Email *</label>
      <input
        class="form-input"
        type="email"
        id="email"
        name="email"
        required
      />

      <label for="telefono">Telefono *</label>
      <input
        class="form-input"
        type="tel"
        id="telefono"
        name="telefono"
        required
      />
      <fieldset>
        <legend>Deseas recibir informacion de las ultimas noticias</legend>
      <input type="radio" name="informacion" id="si" value="Si">
        <label for="si">Si </label>
      
      
      
      <input type="radio" name="informacion" id="no" value="no">
      
      <label for="no">No </label>
      
    </fieldset>
      
      <label for="message">Consulta</label>
      <textarea
        class="form-textarea"
        id="message"
        name="message"
      ></textarea>
      <div>
        <input type="checkbox" id="accept" name="accept" />
        <label for="accept">Acepto los términos y condiciones.</label>
      </div>
      <button type="submit" class="form-input button" id="button" disabled>
        Enviar
      </button>
    </form>
        
    </div>
</template>