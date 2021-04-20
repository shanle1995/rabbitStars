// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import './assets/css/setting.scss'
import 'iview/dist/styles/iview.css'
import AV from 'leancloud-storage'
import load from './view/loading/loading.js'
import store from './store/index'//仓库
// import './axios/http.js'
import { post } from './axios/http'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(load)

AV.init({
  appId: 'iDY3oedP0zc5jHEpnV7gbPRy-gzGzoHsz',
  appKey: 'BMDha8SrN9T9I98Fd9Pcqfkw',
  serverURL: 'https://idy3oedp.lc-cn-n1-shared.com'
})
Vue.prototype.AV = AV

Vue.prototype.$post = post

router.beforeEach((to, from, next) => {
  let nickName = localStorage.getItem('submitData')
  if (nickName) {
    if (to.name == null || to.name == 'login') {
      localStorage.clear()
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      localStorage.clear()
      next({
        path: '/login',
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
