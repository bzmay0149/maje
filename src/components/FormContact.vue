<template>

  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Contacto</h3>
            </div>
            <form ref="form" @submit.prevent="sendEmail">
            <div class="card-body">
              <div class="form-group text-start">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="text" name="name" class="form-control custom-input" id="exampleInputEmail1" aria-describedby="emailHelp" required>
              </div>

              <div class="form-group text-start mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" name="email" class="form-control custom-input" id="exampleInputPassword1" required>
              </div>

              <div class="form-group text-start mb-3">
                <label for="exampleInputPassword1" class="form-label">Teléfono</label>
                <input type="text" name="phone" class="form-control custom-input" id="exampleInputPassword1" required>
              </div>

              <div class="form-group text-start mb-4">
                <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                <textarea name="message" class="form-control custom-input" id="exampleInputPassword1" required></textarea>
              </div>

              <div class="form-check-inline d-flex align-items-center mb-3">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label custom-input mx-2" for="exampleCheck1">Acepto los términos y condiciones</label>
</div>

              
            
              <input type="submit" class="btn col-12" id="button" value="Enviar Email" >
            </div></form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import emailjs from '@emailjs/browser';


export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_i0nt5ql', 'template_a1rqgpt', this.$refs.form, 'MBrCHCNrZknf2glfZ')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style scoped> 
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
.card-header, .btn{
  background-color: rgb(75, 15, 15);
  color: bisque;
}
.card-body{
  background-color: #f6cea1;
} 
</style>





