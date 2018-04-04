import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Personajes from './components/Personajes.vue'
import Vehiculos from './components/Vehiculos.vue'
import Cruceros from './components/Cruceros.vue'
import Planetas from './components/Planetas.vue'
import Especies from './components/Especies.vue'

Vue.use(VueRouter);

const routes = [
        { path: '/', component: Home },
        { path: '/personajes', component: Personajes },
        { path: '/vehiculos', component: Vehiculos },
        { path: '/cruceros', component: Cruceros },
        { path: '/planetas', component: Planetas },
        { path: '/especies', component: Especies }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
