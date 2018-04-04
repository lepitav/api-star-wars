<template>
  <div id="app">
    
    <!-- NAVBAR -->
    
    <div class="wrapper row2">
    <nav id="mainav" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <ul class="clear">
        <li class="nav-item"><a href="/">Home</a></li>
        <li class="nav-item"><a href="/peliculas">Peliculas</a></li>
        <li class="nav-item"><a href="/personajes">Personajes</a></li>
        <li class="nav-item"><a href="/cruceros">Cruceros Espaciales</a></li>
        <li class="nav-item"><a href="/vehiculos">Vehiculos</a></li>
        <li class="nav-item"><a href="/planetas">Planetas</a></li>
        <li class="nav-item"><a href="/especies">Especies</a></li>
      </ul>
      <!-- ################################################################################################ -->
    </nav>
  </div>

    <!-- ROUTER VIEW -->


    <router-view></router-view>


    <!-- FOOTER -->

  <div class="wrapper row4">
    <footer id="footer" class="hoc topspace-0 clear"> 
      <!-- ################################################################################################ -->
     <div class="one_third first">
       <h6 class="title">Contact Information</h6>
        <ul class="nospace linklist contact">
          <li><i class="fa fa-phone"></i> +58 4241936674</li>
          <li><i class="fa fa-envelope-o"></i> luiseduardopita@hotmail.com</li>
          <li><i class="fa fa-github"></i> <a href="https://github.com/lepitav" target="_blank">https://github.com/lepitav</a></li>
        </ul>
      </div>
      <!-- ################################################################################################ -->
    </footer>
  </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    'home': Home,
  },
  data() {
    return {
      
  

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
