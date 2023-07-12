<template>
    <nav class="navbar navbar-light pt-0">
      <div class="container-fluid d-flex flex-column align-items-center mt-5">
        <div class="logo ">
          <RouterLink to="/" class="navbar-brand ">
            <img src="../assets/logo-zurtek.png" alt="logo-zurtek" width="160" >
          </RouterLink>
        </div>
        <div class="list">
          <ul class="nav justify-content-center ">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link pt-0  ">Home</RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/services" class="nav-link pt-0" >Servicios</RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/about" class="nav-link pt-0" >Contacto</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // No se requiere el objeto export en el bloque <script setup>
  // Las variables y funciones se pueden utilizar directamente en el template
  </script>
  
  <style scoped>
  .container-fluid {
    background-color  : #16A641;
  
  }
  
  
   
  .list {
    text-align: center; /* Centra horizontalmente los elementos de la lista */
   
  }
  .nav-link{
    color: #795225;
    font-size:x-large;
    font-weight: bold;
  }
  .nav-link:hover{
    color: #D17F1F;
  }
  </style>