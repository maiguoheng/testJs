import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/a',
          name: 'a',
          component:  ()=>import('@/components/a.vue')
        },{
          path: '/b',
          name: 'b',
          component:  ()=>import('@/components/b.vue')
        },{
          path: '/c',
          name: 'c',
          component:  ()=>import('@/components/c.vue')
        }]
    }
  ]
})
