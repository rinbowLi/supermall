<template>
  <div class="Detail">
    <detail-nav-bar class="datail-nav" @titleClick="titleClick" />
    <scroll class="content" ref="scroll">
      <detail-swiper class="topImg" :topImg="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="goodsParam" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommendInfo" ref="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DatailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamInfo";
import DetailCommentInfo from "./childComponents/DeatilCommentInfo";
import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import { itemListenerMixin } from "@/common/mixin";
import {debounce} from "@/common/utils";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendInfo: [],
      scrollToY: [0, 0, 0, 0],
      getOffsetTopFunc:null
    };
  },
  created() {
    //获取商品唯一iid
    this.iid = this.$route.params.iid;
    //获取详情数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      //获取顶部轮播图
      this.topImg = data.itemInfo.topImages;
      //获取商品基础信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取详情信息
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

     this.getOffsetTopFunc = debounce(()=>{
        this.scrollToY = [];
      this.scrollToY.push(0);
      this.scrollToY.push(this.$refs.param.$el.offsetTop);
      this.scrollToY.push(this.$refs.comment.$el.offsetTop);
      this.scrollToY.push(this.$refs.recommend.$el.offsetTop);
      console.log( this.scrollToY)
     },100)
    });
    //获取推荐数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.list;
    });
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemIamgeFunc);
  },
  methods: {
    imgLoad() {
      this.newRefresh();
      this.getOffsetTopFunc();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.scrollToY[index], 500);
    },
  }
};
</script>

<style lang="less" scoped>
.Detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}
.datail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>