<template>
  <div class="service-title">
    <h1 class="m-5">{{ $t("services.title") }}</h1>
    <!-- <h2>Zurtek es una empresa de inserción donde trabajamos la madera y sus derivados realizando muebles e instalaciones de calidad y diseño, tanto con materiales tradicionales como innovadores. Atendemos las necesidades tanto del hogar, como de locales comerciales, como oficinas y empresas constructoras.
</h2> -->
  </div>
  <div class="container">
    <div container--row>
      <div class="card-group gap-5 mb-5">
        <div class="card">
          <img src="../assets/baño43n.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title1") }}</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/juego-mesitas-sala43n.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title2") }}</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/mesa-mundo43n.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title3") }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div container--row>
      <div class="card-group gap-5 mb-5">
        <div class="card">
          <img
            src="../assets/Phenolic-board-sevilla.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title4") }}</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/surgery-room43.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title5") }}</h5>
          </div>
        </div>
        <div class="card">
          <img
            src="../assets/mueble-aparador43n.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ $t("services.title6") }}</h5>
          </div>
        </div>
      </div>
      <div container--row>
        <div class="card-group gap-5 mb-5">
          <div class="card">
            <img
              src="../assets/mueble-pan43n.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ $t("services.title7") }}</h5>
            </div>
          </div>
          <div class="card">
            <img
              src="../assets/muebles-despacho-oficina43n.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ $t("services.title8") }}</h5>
            </div>
          </div>
          <div class="card">
            <img
              src="../assets/puertascorrederas43n.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ $t("services.title9") }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="card">
        <img class="zurtek43serv" src="../assets/logo-zurtek43.png" alt="..." >
        <div class="card-body">
          <h5 class="card-title">¿Tienes una idea?</h5>
          <p class="card-text">Te ayudamos a llevarla acabo. Sea pequeña o grande, tenemos la capacidad de prototipar, presupuestar y acompañarte en todo el proceso de creación.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div> -->
    </div>
  </div>

  <div class="centered-card">
    <div class="card logo" style="width: 24rem">
      <img class="zurtek43serv" src="../assets/logo-services.png" alt="..." />
      <div class="card-body" style="width: 24rem">
        <h5 class="card-title">{{ $t("services.title10") }}</h5>
        <p class="card-text mb-4 alinear">{{ $t("services.title11") }}.</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.centered-card {
  width: 24rem;
  margin: 0 auto; /* Esto centrará horizontalmente la tarjeta */
}

.card {
  border: none;
}
.service-tittle {
  margin: 7rem 0;
}
.alinear {
  text-align: justify;
}

/* .container {
    display: flex;

    gap: 5rem;
    margin: 3rem;
    margin-left: auto;
    margin-right: auto;
} */

@media (max-width: 680px) {
  .zurtek43serv {
    width: 18rem;
    margin: auto;
  }
}
</style>
