import Vue from 'vue'
import Router from 'vue-router'


import store from './../store/store'


import Hello from './../components/Hello'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [{
    name: 'hello',
    path: '/hello',
    component: Hello
  }]
})

export default router