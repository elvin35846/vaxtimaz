import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Loans from './views/Loans.vue'
import Offer from './views/Offer.vue'
import Deposits from './views/Deposits.vue'
import Mortgage from './views/Mortgage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loans',
      name: 'loans',
      component: Loans
    },
    {
      path: '/offer',
      name: 'offer',
      component: Offer
    },
    {
      path: '/deposits',
      name: 'deposits',
      component: Deposits
    },
    {
      path: '/mortgage',
      name: 'mortgage',
      component: Mortgage
    }
  ]
})
