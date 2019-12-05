<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl
      class="tab-Control"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isShowTabControl"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :bannerList="bannerList" @swiperImgLoad.once="swiperImgLoad" />
      <recommend-view :recommendList="recommendList" />
      <Feature />
      <TabControl
        class="tabControl"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childCompoents/HomeSwiper";
import RecommendView from "./childCompoents/RecommendView";
import Feature from "./childCompoents/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultiData, getHomeGoods } from "network/home";
import { debounce, throttle } from "components/common/utils/utils";
export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      bannerList: [],
      dKeywordList: [],
      keywordList: [],
      recommendList: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowTabControl: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.curType].list;
    }
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh =
      this.$refs.scroll && debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
          break;
      }
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    //网络请求
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.bannerList = res.data.banner.list;
        this.dKeywordList = res.data.dKeyword.list;
        this.keywordList = res.data.keywords.list;
        this.recommendList = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false;
      this.isShowTabControl = -position.y > this.tabOffsetTop ? true : false;
    },
    loadMore() {
      const getHomeGoods = throttle(this.getHomeGoods, 500);
      getHomeGoods(this.curType);
      this.$refs.scroll.refresh();
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
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
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.tab-Control {
  z-index: 10;
  position: relative;
}
</style>