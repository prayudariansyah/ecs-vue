import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashboadView.vue'
import ProFile from '../views/ProfileView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import SubClassOne from '../views/SubClassOneView.vue'
import SUbClassTwo from '../views/SubClassTwoView.vue'



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
    path: '/subclass-one',
    name: 'subclass-one',
    component: SubClassOne
  },
  {
    path: '/subclass-two',
    name: 'subclass-two',
    component: SUbClassTwo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
