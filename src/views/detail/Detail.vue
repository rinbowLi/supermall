<template>
  <div class="Detail">
    <detail-nav-bar class="datail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper class="topImg" :topImg="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :paramInfo="goodsParam" />
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

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      console.log(res);
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
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
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
  height: calc(100% - 44px);
}
</style>