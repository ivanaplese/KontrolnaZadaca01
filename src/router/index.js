import Vue from 'vue'
import VueRouter from 'vue-router'
import PrviZadatak from '../views/PrviZadatak.vue'
import DrugiZadatak from '../views/DrugiZadatak.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/prvi',
    name: 'prvi-zadatak',
    component: PrviZadatak
  },
  {
    path: '/drugi',
    name: 'drugi-zadatak',
    component: DrugiZadatak
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
