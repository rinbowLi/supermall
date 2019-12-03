<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :bannerList="bannerList"></home-swiper>
    <recommend-view :recommendList="recommendList"></recommend-view>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCompoents/HomeSwiper";
import RecommendView from './childCompoents/RecommendView'
import { getHomeMultiData } from "network/home";
export default {
  name: "home",
  components: {
    navBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      bannerList: [],
      dKeywordList: [],
      keywordList: [],
      recommendList: []
    };
  },
  created() {
    getHomeMultiData().then(res => {
      this.bannerList = res.data.banner.list;
      this.dKeywordList = res.data.dKeyword.list;
      this.keywordList = res.data.keywords.list;
      this.recommendList = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>