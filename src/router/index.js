import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Results from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'About',
      component: Results
    }
  ]
})
