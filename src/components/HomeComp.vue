<template>
  <div class="row row-cols-1 row-cols-md-2 g-4 m-5">
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
  </div>

  <div class="row justify-content-evenly">
    <div class="col-md-6">
      <img
        class="img-fluid rounded mx-auto p-3 d-block"
        src="../assets/surgery-room.jpg"
        alt=""
      />
    </div>
    <div class="col-md-5">
      <h5 class="text-center mx-auto">Título</h5>
      <p class="mobile-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eum porro
        harum optio dicta voluptatum, deserunt modi iure, excepturi nisi maxime
        ea assumenda nostrum eius distinctio vitae! Autem, odit architecto!
      </p>
      <br />
      <p class="mobile-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ab
        fugiat iste dicta tempora? Incidunt porro nemo iure voluptatem, qui
        voluptas at, nobis neque velit in iste praesentium recusandae ducimus!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@media (max-width: 1200px) {
  .card-title {
    font-size: large; /* Tamaño de letra ajustado */
    }
   
    .align-items-center{
      margin: 0%;
      padding-left: auto;
      padding-right: auto;
    }
  
   

  .text-md-center {
    text-align: center; /* Alineación centrada en tamaño de tablet */
    font-size: x-small;
  }
}

@media screen and (max-width: 767px) {
  .mobile-text {
    text-align: justify;
    margin: 1rem;
    padding: 10px;
  }
}
</style>
