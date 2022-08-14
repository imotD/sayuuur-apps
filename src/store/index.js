import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/services/service.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: []
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
    SET_CART(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getCart({ commit }) {
      return Service.getCart().then((res) => {
        commit('SET_CART', res.data);
      });
    }
  }
});
