<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="BackCLick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in titles"
          :key="item.id"
          @click="HandleClick(index)"
          :class="{active:curIndex===index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      curIndex: 0
    };
  },
  methods: {
    HandleClick(index) {
      this.curIndex = index;
    },
    BackCLick(){
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  margin-top: 3px;
}
.active {
  color: var(--color-high-text);
}
.back img{
  margin-top: 13px;
}
</style>