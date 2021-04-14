import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Chat from '../pages/Chat.vue'
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) return next({ name: 'Home' })

  next()
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) return next({ name: 'Chat' })

  next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
