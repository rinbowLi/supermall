<template>
  <div class="CheckButton" :class="isActive?'':'notActive'" @click="checkClick">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkClick() {
      this.$emit("checkBtnClick");
    }
  }
};
</script>

<style scoped>
.CheckButton {
  background-color: var(--color-tint);
  border-radius: 50%;
  border: 2px solid var(--color-tint);
  width: 20px;
}
.notActive {
  border: 2px solid #aaa;
  background-color: #fff;
}
</style>