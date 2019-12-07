<template>
  <div class="cartList">
    <scroll class="content">
      <ul>
        <li class="listitem" v-for="item in cartList" :key="item.iid">{{item}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
export default {
  name: "cartList",
  components: {
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: calc(100% - 49px);
}
.listitem{
  width: 100vw;
}
</style>