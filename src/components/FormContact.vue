<template>







  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Contacto</h3>
            </div>
            <div class="card-body">
              <div class="form-group text-start">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="text" class="form-control custom-input" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>

              <div class="form-group text-start mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control custom-input" id="exampleInputPassword1">
              </div>

              <div class="form-group text-start mb-3">
                <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                <input type="text" class="form-control custom-input" id="exampleInputPassword1">
              </div>

              <div class="form-group text-start mb-4">
                <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                <textarea class="form-control custom-input" id="exampleInputPassword1"></textarea>
              </div>

              <div class="form-check-inline d-flex align-items-center mb-3">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label custom-input mx-2" for="exampleCheck1">Acepto los términos y condiciones</label>
</div>

              <button type="submit" class="btn btn-primary col-12">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






  





</template>


<style>
.custom-form {
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
}

.custom-label {
  text-align: left;
  display: block;
}
custom-input{
margin-left: 0.8rem;
margin-top: 1.2rem;
margin-bottom: 1.2rem;
}
.check{
  margin-left: 0.8rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
}
</style>





