<template>
  <!-- <div class="row row-cols-1 row-cols-md-2 g-4 m-5">
    <div class="col">
      <div class="card border-0">
        <img
          src="../assets/surgery-room.jpg"
          class="card-img-top rounded-4"
          alt="..."
        />
      </div>
    </div>
    <div class="col d-flex align-items-center">
      <div class="card title m-5 border-0">
        <h5 class="card-title text-center">Título</h5>
        <p class="card-text text-start text-md-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          aspernatur officia hic in asperiores, ipsam labore dicta incidunt
          nobis nemo soluta voluptates quos? Cumque, ut nihil dolor repellat
          quaerat placeat?
        </p>
        <p class="card-text text-start text-md-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          aspernatur officia hic in asperiores, ipsam labore dicta incidunt
          nobis nemo soluta voluptates quos? Cumque, ut nihil dolor repellat
          quaerat placeat?
        </p>
      </div>
    </div>
  </div> -->

  <div class="row justify-content-evenly">
    <div class="col-md-6">
      <img
        class="img-fluid  mx-auto p-3 mt-5  d-block"
        src="../assets/surgery-room.jpg"
        alt=""
      />
    </div>
    <div class="col-md-5">
      <h1 class="text-center mx-auto ">Zurtek, S.L.</h1>
      <p class="mobile-text">
        Zurtek, S.L. es una empresa de inserción dentro del sector de la madera. Se ha creado en el año 2004 promovida por la cooperativa Peñascal, S.Coop. <br>

Entre sus objetivos está la inserción laboral de personas en riesgo de exclusión a través de la fabricación y montaje de todo tipo de mobiliario y elementos de carpintería, con el fin de que las personas en puestos de inserción adquieran las competencias necesarias para insertarse en el mercado laboral ordinario dentro de dicho sector.
<br>
<span>Servicios:</span>
<br>
Fabricación,montaje e instalación de mobiliario y elementos de carpintería. Diseño a medida de todo tipo de mobiliario  y soluciones constructivas. Desarrollo de productos dedicados a la agricultura urbana, vertical.
      </p>
     
      
    </div>
  </div>
</template>

<script setup></script>

<style scoped>


.mobile-text{
  text-align: justify;
}
span{
  font-weight: bold;
  font-size: x-large;
  padding-top: 5em;
}
.text-center{
  margin-top: 2em;
  font-weight: bold;
}
.img-fluid{
  margin-bottom: 3em;
  border-radius: 10%;
}
@media (max-width: 1200px) {
  .card-title {
    font-size: medium; /* Tamaño de letra ajustado */
    }
    .text-center{
  margin-top: 4em;
  font-size: large; 
  margin-bottom: .2em;
  
    }
    span{
      font-size: large;
    }
   
    .align-items-center{
      margin: 0%;
      padding-left: auto;
      padding-right: auto;
    }
    .mobile-text{
      font-size: x-small;
      
    }
  
   

  .text-md-center {
    text-align: center; /* Alineación centrada en tamaño de tablet */
    font-size: small;
  }
}

@media screen and (max-width: 767px) {
  .mobile-text {
    text-align: justify;
    margin: 1rem;
     padding: 5px; 
    

  }
  .text-center{
    margin-top: .5em;
  }
  .img-fluid{
    margin-bottom: .2em;
}
.mobile-text2{
  margin-bottom: 3em;
  margin-top: 0%;
}
}
</style>
