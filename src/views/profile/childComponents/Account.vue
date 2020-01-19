<template>
  <section class="account-box">
      <div class="account-item">
        <div class="number">
          <span>0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span>0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span>0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
</template>

<script>
export default {
  name:"account",

}
</script>

<style scoped>
.account-box {
  display: flex;
}
.account-item {
  width: 100%;
  padding: 18px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}
.account-box :last-child {
  border-right: none;
}
.number {
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
}
.number span {
  color: #ff5f3e;
  font-size: 24px;
  font-weight: 700;
  margin-right: 5px;
}
.account-info{
  text-align: center;
}
</style>