<template>
  <swiper>
    <swiper-item v-for="item in bannerList" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      this.$emit("swiperImgLoad");
    }
  }
};
</script>

<style>
</style>