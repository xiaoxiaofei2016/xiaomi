import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const __import__ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('Home')
    },
    {
      path: '/Cart',
      component: __import__('Cart')
    },
    {
      path: '/Login',
      component: __import__('Login')
    },
    {
      path: '/Products',
      component: __import__('Products')
    }
  ]
})
