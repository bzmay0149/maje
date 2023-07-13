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




 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



        
    </div>





    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Contacto</h3>
  

        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    
                <label for="exampleInputPassword1" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
  
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <label for="exampleInputPassword1" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  
                <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                <textarea class="form-control" id="exampleInputPassword1"></textarea>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
    
                <button type="submit" class="btn btn-primary">Enviar</button>
  
                </div>
                <p>hasta la narices de esto ordenador</p>
                
            </div>
          </div>
        </div>
        
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

    </div>
</template>