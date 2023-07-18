<template>
  <div class="w-50  mx-auto mb-5">
    <h3 class="mt-5">Login Administrador</h3>
    <form class="login form mt-5 p-5  rounded shadow d-flex flex-column align-items-center" action="">

      <div class="nombre col-sm-12 col-md-6">
        <label class="form-label" for="username">Nombre de usuario</label>
        <input
          class="form-control w-100 mx-auto"
          type="text"
          name="username"
          id=""
        />
      </div>

      <div class="contraseña mt-5 col-sm-12 col-md-6 ">
        <label class="form-label" for="password">Contraseña</label>
        <input class="form-control w-100 mx-auto" type="text" name="password" id="" />
      </div>
      <input
        class="btn mt-5"
        type="submit"
        value="Iniciar sesión"
      />
    </form>
  </div>
</template>
<script script>
</script>


<style scoped>
.login{
    background-color: #f6cea1;
}
input[type="submit"]{
  background-color: rgb(75, 15, 15);
  color: #f6cea1;
  width: 50%;
}
</style>
