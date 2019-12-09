<template>
  <div class="CartBottomBar">
    <div class="checkAllArea">
      <check-button
        @checkBtnClick="checkBtnClick"
        :isActive="isCheckAll"
        class="ckeckAll"
        :class="{active:isAll}"
      />
      <span class="check-text">全选</span>
    </div>
    <div class="totalPrice">合计：￥{{totalPrice}}</div>
    <div class="calc">去计算（{{curLength}}）</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList", "totalPrice"]),
    isCheckAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(i => !i.checked);
    },
    curLength() {
      return this.cartList.filter(i => i.checked).length;
    }
  },
  data() {
    return {
      isAll: false
    };
  },
  methods: {
    checkBtnClick() {
      this.isAll = !this.isAll;
      this.$store.commit("checkAll", this.isAll);
    }
  }
};
</script>

<style scoped>
.active {
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);
}
.CartBottomBar {
  background-color: #eeeeee;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.checkAllArea {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100px;
}
.ckeckAll {
  height: 20px;
  width: 20px;
  margin-left: 10px;
}
.check-text {
  line-height: 21px;
  margin-left: 10px;
}
.totalPrice {
  flex: 1;
}
.calc {
  width: 90px;
  background-color: var(--color-tint);
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
}
</style>