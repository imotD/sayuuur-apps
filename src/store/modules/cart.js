import Service from '@/services/service.js';
export const namespaced = true;

export const state = {
  cart: []
};
export const getters = {
  cartLength: (state) => {
    return state.cart.length;
  }
};
export const mutations = {
  SET_CART(state, item) {
    state.cart = item;
  },
  ADD_CART(state, item) {
    state.cart.push(item);
  }
};
export const actions = {
  getCart({ commit }) {
    return Service.getCart().then((res) => {
      commit('SET_CART', res.data);
    });
  },
  OrderFood({ commit }, food) {
    return Service.postCart(food).then((res) => {
      commit('ADD_CART', res.data);
    });
  }
};
