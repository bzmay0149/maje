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


<!-- formulario de contacto -->


<div class="container ">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Contacto</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
            <textarea class="form-control" id="exampleInputPassword1"></textarea>
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Acepto los términos y condiciones</label>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
        <p class="text-center">Hasta la narices de este ordenador</p>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Contacto</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Apellido</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Teléfono</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
            <textarea class="form-control form-control-sm" id="exampleInputPassword1"></textarea>
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Acepto los términos y condiciones</label>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
        <p class="text-center">Hasta la narices de este ordenador</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Contacto</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Apellido</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Teléfono</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
            <textarea class="form-control form-control-sm" id="exampleInputPassword1"></textarea>
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Acepto los términos y condiciones</label>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
        <p class="text-center">Hasta la narices de este ordenador</p>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Contacto</h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Apellido</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Teléfono</label>
            <input type="text" class="form-control form-control-sm" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label">Mensaje</label>
            <textarea class="form-control form-control-sm" id="exampleInputPassword1"></textarea>
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Acepto los términos y condiciones</label>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
        <p class="text-center">Hasta la narices de este ordenador</p>
      </div>
    </div>
  </div>
</div>


</template>