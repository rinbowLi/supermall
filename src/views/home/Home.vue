<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :bannerList="bannerList" />
    <recommend-view :recommendList="recommendList" />
    <Feature />
    <TabControl class="tabControl" :titles="['流行','新款','精选']"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childCompoents/HomeSwiper";
import RecommendView from "./childCompoents/RecommendView";
import Feature from "./childCompoents/FeatureView";

import navBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import { getHomeMultiData } from "network/home";
export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    navBar,
    TabControl
  },
  data() {
    return {
      bannerList: [],
      dKeywordList: [],
      keywordList: [],
      recommendList: [],
      goods: {
        "pop":{page:0,list: []},
        "news":{page:0,list: []},
        "sell":{page:0,list: []},
      }
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
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tabControl{
  position: sticky;
  top:44px;
}
</style>