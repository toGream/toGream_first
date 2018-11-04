import Vue from 'vue'
import Router from 'vue-router'
import SelectOne from '@/pages/selectone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'selectone',
      component: SelectOne
    }
  ]
})
