<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

// Variables reactivas para almacenar los datos de los campos de entrada
const username = ref("");
const password = ref("");

// Obtener la instancia de Vue Router
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/login", {
      username: username.value,
      password: password.value,
    });

    const token = response.data;
    console.log(token);

    Cookies.set("token", token);
    router.push("/intranet");
  } catch (error) {
    console.log(error);
  }
};
</script>


<template>
  <!-- <div class="w-50  mx-auto mb-5">
    <h3 class="mt-5">Login Administrador</h3>
    <div class="login form mt-5 p-5  rounded shadow d-flex flex-column align-items-center" >

      <div class="nombre col-sm-12 col-md-6">
        <label class="form-label" for="username">Nombre de usuario</label>
        <input
          class="form-control w-100 mx-auto"
          name="username" type="text" v-model="username"
        />
      </div>

      <div class="contraseña mt-5 col-sm-12 col-md-6 ">
        <label class="form-label" for="password">Contraseña</label>
        <input class="form-control w-100 mx-auto" name="password" type="password" v-model="password" />
      </div>

      <button class="btn  mt-5"
        @click="handleSubmit"> Iniciar sesión</button>
    </div>

  </div> -->
 <!-- -------------------------------------------veo-----------  -->
 <div class="my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Login Administrador</h3>
            </div>
            
            <div class="card-body">
              <div class="form-group text-start">
                <label class="form-label" for="username">Nombre de usuario</label>
        <input
          class="form-control w-100 mx-auto"
          name="username" type="text" v-model="username"
        />
              </div>

              <div class="form-group text-start mb-3">
                <label class="form-label" for="password">Contraseña</label>
        <input class="form-control w-100 mx-auto" name="password" type="password" v-model="password" />
              </div>

            
              <input class="btn col-12" id="button"  @click="handleSubmit" value="Iniciar Sesion" >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
/* .login{
    background-color: #f6cea1;
}
.btn{
  background-color: rgb(75, 15, 15);
  color: #f6cea1;
  width: 50%;
} */


custom-input{
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
.btn:hover{
   color: bisque;
  background-color: rgb(75, 15, 15);
}
</style>
