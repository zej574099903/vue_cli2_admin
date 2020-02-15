// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 全局挂载md5
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

//全局挂载message
import {
  message
} from 'ant-design-vue';
Vue.prototype.$message=message

Vue.use(Antd)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
