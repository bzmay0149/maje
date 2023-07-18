<!-- <template>
  <nav class="navbar navbar-light pt-0">
    <div class="container-fluid d-flex align-items-center justify-content-center">
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    <div class="lala">
      <div class="logo m-5">
        <RouterLink to="/" class="navbar-brand">
          <img src="../assets/logo-zurtek.png" class="img ms-5" alt="logo-zurtek" width="160">
        </RouterLink>
      </div>
      </div>
      <ul class="menu mt-3 text-center" :class="{ active: isMenuOpen }">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link pt-0">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/services" class="nav-link pt-0">Servicios</RouterLink>
        </li>
        <li class="nav-item pe-5">
          <RouterLink to="/about" class="nav-link pt-0 me-5">Contacto</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template> -->

<!-- <script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script> -->

<!-- <style scoped>
.lala{
  /* background-color: rgb(180, 101, 101); */
  /* background-color: #D8C3A5; */
  background-color: #EFE9E7;
  text-align: center;
}



.list {
  text-align: center;
}

.nav-link {
  color: #795225;
  font-size: x-large;
  font-weight: bold;
  margin-right: 6rem;
}

.nav-link:hover {
  color: #D17F1F;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.menu {
  display: flex;
  justify-content: center;
}

.menu li {
  list-style: none;
  margin: 0 10px;
}

.menu li a {
  text-decoration: none;
  color: #795225;
  font-size: x-large;
  font-weight: bold;
}

@media (max-width: 768px ) {
  .menu {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #795225;
    margin: 5px 0;
  }

  .menu.active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    text-align: center;
    margin-left: 0;
  }
}
</style> -->


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
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Administrador</router-link>
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
  background-color:rgb(75, 15, 15);
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
 /* margin-top: 1rem;
  margin-left: 16rem;
  margin-bottom: 2rem; */
  margin-left: auto;
  margin-right: auto;
}




@media (max-width: 680px) {
  /* .nav-item {
    
    margin-left: 2.8rem;
  } */
  .nav-link {
    font-size: medium;
  }
}
</style>
