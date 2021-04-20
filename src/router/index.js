
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/view/Login/login'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/view/index/index'], resolve)
    }
  ]
})
