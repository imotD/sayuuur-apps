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
  getCart({ commit, dispatch }) {
    return Service.getCart()
      .then((res) => {
        commit('SET_CART', res.data);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'Ada masalah: ' + error.message
        };
        dispatch('notification/add', notification, { root: true });
      });
  },
  OrderFood({ commit, dispatch }, food) {
    return Service.postCart(food)
      .then((res) => {
        commit('ADD_CART', res.data);
        const notification = {
          type: 'succes',
          message: 'Berhasil menambahkan'
        };
        dispatch('notification/add', notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'Ada masalah: ' + error.message
        };
        dispatch('notification/add', notification, { root: true });
        throw error;
      });
  }
};
