import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Main from '@/components/Main'
import OldMain from '@/components/OldMain'
import AutoGen from '@/components/AutoGen'

Vue.use(Router)
Vue.use (VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/old',
      name: 'oldmain',
      component: OldMain
    },
    {
      path: '/gen',
      name: 'gen',
      component: AutoGen
    }
  ]
})
