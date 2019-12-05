import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/category',
    name: 'category',
    component: () => import("views/category/Category")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("views/cart/Cart")
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("views/profile/Profile")
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: () => import("views/detail/Detail")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
