<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton
        @checkBtnClick="checkedChange"
        v-model="product.checked"
        :isActive="product.checked"
      ></CheckButton>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">
          <div class="decrease" @click="decreaseCount">-</div>
          <input type="number" class="count" v-model="product.count" />
          <div class="add" @click="addCount">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "ShopCartItem",
  props: {
    product: Object
  },
  components: {
    CheckButton
  },
  methods: {
    checkedChange() {
      this.product.checked = !this.product.checked;
    },
    decreaseCount() {
      if (this.product.count <= 1) {
        this.product.count = 1;
        this.$toast.show("数量不能在减少了哦", 1500);
        return;
      }
      this.product.count--;
    },
    addCount() {
      this.product.count++;
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.item-price{
  line-height: 30px;
}

.info-bottom .item-price {
  color: orangered;
}
.item-count {
  display: flex;
}
.right {
  width: 100px;
}
.decrease {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 20px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  text-align: center;
  line-height: 28px;
}
.add {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 20px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  text-align: center;
  line-height: 28px;
}
.count {
  width: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
  border-right: none;
  border-left: none;
  height: 30px;
}
</style>
