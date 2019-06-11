import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Default from './views/Default.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/default',
      name:'default',
      component:Default
    }
  ]
})
