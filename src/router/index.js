import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import AgendaPage from '../views/AgendaPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/agenda', name: 'AgendaPage', component: AgendaPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
