<template>
  <div class="wrapper">
    <div id="pageintro" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <div class="introtxt">
        <img src="https://vignette.wikia.nocookie.net/logopedia/images/5/5b/Star-Wars-Logo_Silver.png/revision/latest?cb=20151106011636">
        <br>
        <br>
        <p>{{ home.intro }}</p>
      </div>
      <!-- ################################################################################################ -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: [''],
  data() {
      return {
        home: {
            intro: 'Star Wars es una serie de películas creadas por el cineasta estadounidense George Lucas. Cuentan las historias de diversos personajes en una Galaxia muy muy lejana.',
            movies: 'PELICULAS',
            characters: 'PERSONAJES',
            starships: 'CRUCEROS ESPACIALES',
            vehicles: 'VEHICULOS',
            planets: 'PLANETAS',
            species: 'ESPECIES',
            mpar: 'Listado de todas pelicula de Star Wars, con su sinopsis, fecha, director y productor correspondiente.',
            cpar: 'Listado de cada personaje de Star Wars, con sus atributos fisicos, planetas natales, vehiculos y naves correspondientes.',
            stpar: 'Listado de cruceros espaciales de Star Wars, con sus fabricantes, capacidad de carga, precios y tamaños.',
            vpar: 'Listado de cada vehiculo de Star Wars, con sus fabricantes, capacidad de carga, precios y tamaños correspondientes.',
            ppar: 'Listado de los planetas de Star Wars, con sus climas, fechas de creacion, diametros, gravedad, etc.',
            spar: 'Listado de las especies extraterrestres de Star Wars, con sus atributos fisicos promedio, planetas natales, etc.'
      },
      }
  }
}
</script>

<style scoped>
    p {
        color: white;
        
    }
</style>
