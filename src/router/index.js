import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    alias: '/food',
    name: 'Foods',
    component: () => import('../views/Foods.vue')
  },
  {
    path: '/create-food',
    name: 'create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    props: true,
    component: () => import('../views/FoodDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: () => import('../views/PesananSukses.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
