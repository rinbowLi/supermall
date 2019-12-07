import {
  debounce
} from "./utils";
import BackTop from "components/content/backTop/BackTop";

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

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }

}
