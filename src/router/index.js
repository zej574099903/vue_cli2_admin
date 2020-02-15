import Vue from 'vue'
import Router from 'vue-router'

// 系统登录页
const Login = () => import("@/components/Login");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
