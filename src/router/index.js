import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
import useValidate from '../auth/validate'

const { error, validate } = useValidate()
// auth guard
const ifAuthenticated = async (to, from, next) => {
  if (window.localStorage.getItem('uid')) {
    next()
    return 
  }

  await validate()
  
  if (error.value) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const ifNotAuthenticated = async (to, from, next) => {
  if (!window.localStorage.getItem('uid')) {
    next()
    return 
  }

  await validate()

  if (!error.value) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: ifAuthenticated
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
