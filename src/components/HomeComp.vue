<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key=" `locale-${locale}`" :value="locale">{{ locale }}</option>
      
    </select>
  </div>
  <div class="row justify-content-evenly">
    <div class="col-md-6">
      <img
        class="img-fluid  mx-auto p-3 mt-5  d-block"
        src="../assets/surgery-room.jpg"
        alt=""
      />
    </div>
    <div class="col-md-5">
      <h1 class="text-center mx-auto ">{{ $t('home.titulo') }}</h1>
      <p class="mobile-text"> {{ $t('home.body') }}
        <br>

        {{ $t('home.body1') }}
        <br>
        <span>{{ $t('home.subtitle') }}</span>
        <br>
        {{ $t('home.body2') }}
      </p>


    </div>
  </div>
</template>

<script setup></script>

<style scoped>


.mobile-text{
  text-align: justify;
}

span {
  font-weight: bold;
  font-size: x-large;
  padding-top: 5em;
}

.text-center {
  margin-top: 2em;
  font-weight: bold;
}

.img-fluid {
  margin-bottom: 3em;
  border-radius: 10%;
}

@media (max-width: 1200px) {
  .card-title {
    font-size: medium;
    /* Tamaño de letra ajustado */
  }

  .text-center {
    margin-top: 4em;
    font-size: large;
    margin-bottom: .2em;

  }

  span {
    font-size: large;
  }

  .align-items-center {
    margin: 0%;
    padding-left: auto;
    padding-right: auto;
  }

  .mobile-text {
    font-size: x-small;

  }



  .text-md-center {
    text-align: center;
    /* Alineación centrada en tamaño de tablet */
    font-size: small;
  }
}

@media screen and (max-width: 767px) {
  .mobile-text {
    text-align: justify;
    margin: 1rem;
    padding: 5px;


  }

  .text-center {
    margin-top: .5em;
  }

  .img-fluid {
    margin-bottom: .2em;
  }

  .mobile-text2 {
    margin-bottom: 3em;
    margin-top: 0%;
  }
}</style>
