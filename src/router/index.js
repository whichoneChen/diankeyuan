import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/venue',
    name:'Venue',
    component: () => import('../views/Venue')
  },
  {
    path: '/keynote',
    name:'Keynote',
    component: () => import('../views/Keynote')
  },
  {
    path: '/paper',
    name:'Paper',
    component: () => import('../views/CallForPaper')
  },
  {
    path: '/programme',
    name: 'Programme',
    component: () => import('../views/Programme')
  },
  {
    path: '/accomodation',
    name: 'Accomodation',
    component: () => import('../views/Accomodation')
  },
  {
    path:'/contact',
    name: 'Contact',
    component: () => import('../views/Contact')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
