import Vue from 'vue'
import Router from 'vue-router'
import entry from '@/components/entry'
import detail from '@/components/detail'
import form from '@/components/form'
import success from '@/components/success'
import fail from '@/components/fail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry-page',
      component: entry
    },
    {
      path: '/detail',
      name: 'service-detail',
      component: detail
    },
    {
      path: '/form',
      name: 'form-trusteeship',
      component: form
    },
    {
      path: '/success',
      name: 'success-page',
      component: success
    },
    {
      path: '/fail',
      name: 'fail-page',
      component: fail
    }
  ]
})
