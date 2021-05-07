import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AntdVue from "ant-design-vue";

import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(AntdVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
