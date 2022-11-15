import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashboadView.vue'
import ProFile from '../views/ProfileView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import EmailVerify from '../views/EmailVerify.vue'
import ClassMapel from '../views/Class.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProFile
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/mapel/:id/:mapel_slug',
    name: 'mapels',
    component: ClassMapel,
  },
  {
    path: '/mapel/:id/:mapel_slug/:list_id',
    name: 'list-mapels',
    component: ClassMapel,
  },
  {
    path: '/email-verify',
    name: 'email-verify',
    component: EmailVerify
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
