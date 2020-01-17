<template>
  <div>
    <categroy-goods-list-item :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt @load="imgLoad" />
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </categroy-goods-list-item>
  </div>
</template>

<script>
import CategroyGoodsListItem from "./CategroyGoodsListItem";

export default {
  name: "TabContentCategory",
  components: {
    CategroyGoodsListItem
  },
  props: {
    subcategories: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.count === this.subcategories.list.length) {
        this.$emit("imgload");
        //计数完成后清零
        this.count = 0;
      }
    }
  }
};
</script>

<style scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
