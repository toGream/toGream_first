import Vue from 'vue'
import Router from 'vue-router'
import SelectOne from '@/pages/selectone'
import About from '@/pages/about'
import Courses from '@/pages/courses'
import Portfolio from '@/pages/portfolio'
import Pricing from '@/pages/pricing'
import Contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selectone',
      component: SelectOne
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
