import Vue from 'vue'
import Router from 'vue-router'
import multiguard from 'vue-router-multiguard';
import Home from './views/Home'
import About from './views/About'
import Team from './views/Team'
import Table from './views/Table'
import Test from './views/Test'
import Signup from './views/Signup'
import Login from './views/Login'
import store from './store/modules/auth'
import router from '@/router.js'

Vue.use(Router)

const guard1 = (to, from, next) => {
  if (store.state.token === null) {
    const token = localStorage.getItem('token')
    if (token === "null") {
      router.push('/login')
    }
    else {
      next()
    }
  }
  next()
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', name: 'home', component: Home, beforeEnter: multiguard([guard1]) },
    { path: '/about', name: 'about', component: About, beforeEnter: multiguard([guard1]) },
    { path: '/home', name: 'team', component: Team, beforeEnter: multiguard([guard1]) },
    { path: '/table', name: 'table', component: Table, beforeEnter: multiguard([guard1]) },
    { path: '/test', name: 'test', component: Test, beforeEnter: multiguard([guard1]) },
    { path: '/signup', name: 'signup', meta: {layout: 'no-sidebar'}, component: Signup },
    { path: '/login', name: 'login', meta: {layout: 'no-sidebar'}, component: Login }             
  ]
})
