<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item class="listitem" v-for="item in cartList" :key="item.iid" :product="item">
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "cartList",
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: calc(100vh - 49px - 44px - 40px);
  overflow: hidden;
}
.listitem {
  width: 100vw;
}
.cartList {
  height: 100%;
}
</style>