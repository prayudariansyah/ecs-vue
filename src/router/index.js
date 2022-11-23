import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashboadView.vue'
import ProFile from '../views/ProfileView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import EmailVerify from '../views/EmailVerify.vue'
import ClassMapel from '../views/Class.vue'
import QuizChapter from '../views/quizView.vue'
import newPassword from '../views/NewPasswordView.vue'


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
    path: '/:id/mapel/:mapel_id/:mapel_slug/:list_id',
    name: 'list-mapels',
    component: ClassMapel,
  },
  {
    path: '/email-verify',
    name: 'email-verify',
    component: EmailVerify
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizChapter
  },
  {
    path: '/new-password',
    name: 'new-password',
    component: newPassword,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
