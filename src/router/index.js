import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IntranetView from '../views/IntranetView.vue'
import ServicesView from '../views/ServicesView.vue'  
import LoginView from '../views/LoginView.vue'
import Cookies from 'js-cookie';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "/intranet",
    name: "Intranet",
    component: IntranetView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function isLoggedIn() {
  const token = Cookies.get("token");
  return !!token;
}

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router
