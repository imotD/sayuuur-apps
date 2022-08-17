import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/services/service.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    bestProduct: [],
    products: [],
    productDetail: {}
  },
  getters: {
    cartLength: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
    ADD_MENU(state, menu) {
      state.products.push(menu);
    },
    SET_CART(state, item) {
      state.cart = item;
    },
    ADD_CART(state, item) {
      state.cart.push(item);
    },
    SET_BEST(state, product) {
      state.bestProduct = product;
    },
    SET_PRODUCTS(state, product) {
      state.products = product;
    },
    SET_PRODUCT_DETAIL(state, product) {
      state.productDetail = product;
    }
  },
  actions: {
    getCart({ commit }) {
      return Service.getCart().then((res) => {
        commit('SET_CART', res.data);
      });
    },
    getProductBest({ commit }) {
      return Service.getProductBest().then((res) => {
        commit('SET_BEST', res.data);
      });
    },
    getProducts({ commit }) {
      return Service.getProducts().then((res) => {
        commit('SET_PRODUCTS', res.data);
      });
    },
    getProductDetail({ commit }, id) {
      return Service.getProductDetail(id).then((res) => {
        commit('SET_PRODUCT_DETAIL', res.data);
      });
    },
    getSearchProduct({ commit }, search) {
      return Service.getProductSearch(search).then((res) => {
        commit('SET_PRODUCTS', res.data);
      });
    },
    OrderFood({ commit }, food) {
      return Service.postCart(food).then((res) => {
        commit('ADD_CART', res.data);
      });
    }
  }
});
