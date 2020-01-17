<template>
  <div class="content">
    <scroll id="tab-menu">
      <div class="menu-list">
        <div
          class="menu-item"
          :class="{active: index===currentIndex}"
          v-for="(item, index) in categories"
          :key="index"
          @click="itemClick(index)"
        >{{item.title}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "tabMenu",
  data() {
    return {
      currentIndex: 0
    };
  },
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      if (index !== this.currentIndex) {
        this.currentIndex = index;
        this.$emit("selectItem", index);
      }
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  width: 100px;
  display: flex;
}
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>