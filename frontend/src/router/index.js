import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import CreateRoom from '../components/CreateRoom.vue'
import WaitGroup from '../components/WaitGroup.vue'
import PagPrincipal from '../components/PagPrincipal.vue'
import Aa from '../components/AaLo.vue'




const routes = [
  { path: '/', component: TheWelcome },
  { path: '/create', component: CreateRoom },
  { path: '/waitgroup', component: WaitGroup },
  { path: '/pagPrincipal', component: PagPrincipal },
  { path: '/o', component: Aa }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
