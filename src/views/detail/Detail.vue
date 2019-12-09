<template>
  <div class="Detail">
    <detail-nav-bar class="datail-nav" @titleClick="titleClick" ref="datailNav" />
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <detail-swiper class="topImg" :topImg="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="goodsParam" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommendInfo" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <toast message="哈哈哈哈哈" />
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
import DetailBottomBar from "./childComponents/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import Toast from "components/common/toast/Toast";

import { itemListenerMixin, backTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";

import { mapActions } from "vuex";

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
    DetailBottomBar,
    Scroll,
    Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
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
      getOffsetTopFunc: null
    };
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.loadData();
  },
  created() {
    this.loadData();
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemIamgeFunc);
  },
  methods: {
    ...mapActions(["addToCart"]),
    imgLoad() {
      this.newRefresh();
      this.getOffsetTopFunc();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollToY[index], 500);
    },
    detailScroll(position) {
      const positionY = -position.y;
      for (let i = 0; i < this.scrollToY.length; i++) {
        if (positionY >= this.scrollToY[i]) {
          this.$refs.datailNav.curIndex = i;
        }
      }
      this.isShowBackTop = -position.y > 1000 ? true : false;
    },
    addCart() {
      //组装购物车里需要展示的信息；
      const product = {};
      product.image = this.topImg[0];
      product.title = this.goods.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //添加到购物车
      this.addToCart(product).then(() => {
        this.$toast.show("成功加入购物车", 1500);
      });
    },
    loadData() {
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

        this.getOffsetTopFunc = debounce(() => {
          this.scrollToY = [];
          this.scrollToY.push(0);
          this.scrollToY.push(this.$refs.param.$el.offsetTop);
          this.scrollToY.push(this.$refs.comment.$el.offsetTop);
          this.scrollToY.push(this.$refs.recommend.$el.offsetTop);
        }, 100);
      });
      //获取推荐数据
      getRecommend().then(res => {
        this.recommendInfo = res.data.list;
      });
    }
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
  height: calc(100% - 44px - 49px);
}
</style>