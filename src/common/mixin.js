import {
  debounce
} from "./utils";
export const itemListenerMixin = {
  data() {
    return {
      itemIamgeFunc: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh =
      this.$refs.scroll && debounce(this.$refs.scroll.refresh, 100);
    this.itemIamgeFunc = () => {
      this.newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.itemIamgeFunc);
  }
}
