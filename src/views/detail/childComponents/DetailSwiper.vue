<template>
  <swiper class="swiper-detail">
    <swiper-item v-for="item in topImg" :key="item.id">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: {
    topImg: {
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
  methods: {}
};
</script>

<style scoped>
.swiper-detail {
  height: 300px;
  overflow: hidden;
}
</style>