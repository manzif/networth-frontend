import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Team from './views/Team'
import Table from './views/Table'
import Test from './views/Test'
import Signup from './views/Signup'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/home', name: 'about', component: Team },
    { path: '/table', name: 'table', component: Table },
    { path: '/test', name: 'test', component: Test },
    { path: '/signup', name: 'test', meta: {layout: 'no-sidebar'}, component: Signup },
    { path: '/login', name: 'login', meta: {layout: 'no-sidebar'}, component: Login }              
  ]
})
