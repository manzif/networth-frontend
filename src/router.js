import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Team from './views/Team'
import Table from './views/Table'
import Test from './views/Test'
import Signup from './views/Signup'
import Login from './views/Login'
import { mapGetters } from 'vuex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', name: 'home', component: Home, beforeEnter: (to, from, next) => {
        if (!mapGetters(['isLoggedIn'])) next({ path: '/login' })
        else next()
      } },
    { path: '/about', name: 'about', component: About },
    { path: '/home', name: 'team', component: Team },
    { path: '/table', name: 'table', component: Table },
    { path: '/test', name: 'test', component: Test },
    { path: '/signup', name: 'signup', meta: {layout: 'no-sidebar'}, component: Signup },
    { path: '/login', name: 'login', meta: {layout: 'no-sidebar'}, component: Login }              
  ]
})
