<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.title }} - {{ p.title }}
        <br />
        <el-button
          type="primary"
          :disabled="!p.inventory"
          @click="addProductToCart(p)"
        >
          加入购物车
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductList",
  computed: mapState({
    products: state => state.products.all
  }),
  // computed: {
  //   products(){
  //     return this.$store.state.products.all
  //   }
  // },
  methods: mapActions("cart", ["addProductToCart"]),
  // methods: {
  //   addProductToCart(product){
  //     this.$store.dispatch('cart/addProductToCart', product)
  //   }
  // },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style scoped></style>
