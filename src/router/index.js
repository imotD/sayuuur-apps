import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Cart from '../views/Cart.vue'
import PesananSukses from '../views/PesananSukses.vue';


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    alias: '/food',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    props: true,
    component: FoodDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router