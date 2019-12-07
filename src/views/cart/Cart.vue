<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComponents/CartList"

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(["cartListLength"])
  }
};
</script>

<style scoped>
.cart-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>