import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import CreateRoom from '../components/CreateRoom.vue'

const routes = [
  { path: '/', component: TheWelcome },
  { path: '/create', component: CreateRoom }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
