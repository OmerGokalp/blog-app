import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddPostView',
    component: () => import('../views/AddPostView.vue')
  },
  {
    path: '/posts/:id',
    name: 'EditPosttView',
    component: () => import('../views/PostView.vue'),
    props: true,
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import('../views/PostView.vue'),
    props: true,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
