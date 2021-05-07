import Vue from "vue";
import Vuex from "vuex";

import cart from "@/store/modules/cart";
import products from "@/store/modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: "az@qq.com"
    }
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    products
  }
});
