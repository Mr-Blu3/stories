import Vue from 'vue'
import Router from 'vue-router'
import StoriesComponent from '../components/stories/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'body',
      component: StoriesComponent
    }
  ]
})
