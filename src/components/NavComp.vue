


<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="navbar-content">
        <div class="navbar-logo">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/logo-zurtek.png" alt="logo-zurtek" width="160">
          </router-link>
        </div>
        
        <div class="navbar-links">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">Servicios</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Contacto</router-link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>  

</script>

<style scoped>
.navbar {
  background-color: transparent;
  padding: 0%;
}

.navbar-content {
  width: 100%;
 
}


.navbar-logo {
  background-image: url(../assets/madera.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top:1rem;
  padding-bottom: 1rem;
 
}

.navbar-links {
  background-color:brown;
  width: 100%;
}

.nav-link {
  color: #D17F1F;
  font-size: xx-large;
  font-weight: bold;
}

.nav-link:hover {
  color: #f6cea1;
}

.nav-item {
 
  margin-left: auto;
  margin-right: auto;
}



@media (max-width: 680px) {
   .nav-link {
    font-size: x-large;
  }
}
</style>
