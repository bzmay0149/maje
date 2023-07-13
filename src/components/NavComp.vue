<template>
  <nav class="navbar navbar-light pt-0">
    <div class="container-fluid d-flex align-items-center">
      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="logo mx-lg-0 mx-auto">
        <RouterLink to="/" class="navbar-brand">
          <img src="../assets/logo-zurtek.png" alt="logo-zurtek" width="160">
        </RouterLink>
      </div>
      <ul class="menu" :class="{ active: isMenuOpen }">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link pt-0">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/services" class="nav-link pt-0">Servicios</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link pt-0">Contacto</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.container-fluid {
  background-color: rgb(191, 237, 232);
}

.logo {
  text-align: center;
}

.list {
  text-align: center;
}

.nav-link {
  color: #795225;
  font-size: x-large;
  font-weight: bold;
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

@media (max-width: 768px) {
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
</style>
