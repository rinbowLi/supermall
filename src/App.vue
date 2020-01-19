<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="this.$route.name!=='detail'"></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "content/mainTabbar/MainTabBar";
import Icon from "content/Icon/Icon.vue";
import SvgIcon from "content/Icon/svg.vue";

export default {
  name: "app",
  components: {
    MainTabBar,
    Icon,
    SvgIcon
  }
};
</script>

<style lang="less">
@import "./assets/css/base.css";
</style>
