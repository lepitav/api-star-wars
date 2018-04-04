import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Personajes from './components/Personajes.vue'
import Vehiculos from './components/Vehiculos.vue'
import Cruceros from './components/Cruceros.vue'
import Planetas from './components/Planetas.vue'
import Especies from './components/Especies.vue'
import Peliculas from './components/Peliculas.vue'

import './assets/styles/layout.css'
import './assets/styles/framework.css'
import './assets/styles/fontawesome-4.4.0.min.css'

//import './assets/scripts/jquery.min.js'
//import './assets/scripts/jquery.mobilemenu.js'
//import './assets/scripts/jquery.backtotop.js'
//import './assets/scripts/jquery.placeholder.min.js'

Vue.use(VueRouter);

const routes = [
        { path: '/', component: Home },
        { path: '/personajes', component: Personajes },
        { path: '/vehiculos', component: Vehiculos },
        { path: '/cruceros', component: Cruceros },
        { path: '/planetas', component: Planetas },
        { path: '/especies', component: Especies },
        { path: '/peliculas', component: Peliculas }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
