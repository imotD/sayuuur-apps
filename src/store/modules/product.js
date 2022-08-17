import Service from '@/services/service.js';
export const namespaced = true;

export const state = {
  bestProduct: [],
  products: [],
  productDetail: {}
};

export const mutations = {
  ADD_MENU(state, menu) {
    state.products.push(menu);
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
};

export const actions = {
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
  }
};
