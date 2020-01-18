<template>
  <div class="TabContentCategory">
    <scroll class="scroll" ref="scroll">
      <categroy-goods-list :subcategories="goodsList" @imgload="imgLoad"></categroy-goods-list>
    </scroll>
  </div>
</template>

<script>
import CategroyGoodsList from "./CategroyGoodsList";

import Scroll from "components/common/scroll/Scroll";
export default {
  name: "TabContentCategory",
  components: {
    CategroyGoodsList,
    Scroll
  },
  props: {
    goodsList: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods:{
   imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.TabContentCategory {
  position: absolute;
  left: 100px;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.scroll {
  height: 100%;
  overflow: hidden;
}
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>