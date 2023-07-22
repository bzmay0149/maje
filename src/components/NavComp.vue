<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="navbar-content">
        <div class="navbar-logo">
          <div>
            <router-link to="/" class="navbar-brand">
              <img
                src="../assets/logo-zurtek.png"
                alt="logo-zurtek"
                width="160"
              />
            </router-link>
          </div>
          <!-- utilizamos la libreria i18n  para cambiar el idioma del sitio web -->
          <div class="d-flex justify-content-end mx-3">
            <select v-model="$i18n.locale">
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </div>
        </div>
        <div class="navbar-links">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">
              <router-link to="/" class="nav-link">{{
                $t("navbar.home")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link">{{
                $t("navbar.about")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">{{
                $t("navbar.contact")
              }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">{{
                $t("navbar.admin")
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  background-color: rgba(241, 244, 247, 0.582);
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  border: #f1ece6;
}
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
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.navbar-links {
  background-color: rgb(75, 15, 15);
  width: 100%;
}

.nav-link {
  color: #d17f1f;
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
select {
  background-color: rgb(75, 15, 15);
  color: #f1ece6;
}

@media (max-width: 680px) {
  .nav-link {
    font-size: medium;
  }
}
</style>
