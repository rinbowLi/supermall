<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <user-info />
    <account-info />
    <list-view :listData="orderList"></list-view>
     <list-view :listData="serviceList"></list-view>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";

import UserInfo from "./childComponents/UserInfo";
import AccountInfo from "./childComponents/Account";
import ListView from "./childComponents/ListView"

export default {
  name: "profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    ListView
  },
  data(){
    return{
         orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
    }
  }
};
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>