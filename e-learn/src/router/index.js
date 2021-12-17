import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    meta: {
      hideNavbar: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let path = '';
  if (to.name == 'Login' && isLoggedIn()) {
    path = '/';
  } else if (to.name == 'Signup' && isLoggedIn()) {
    path = '/';
  } else if (
    to.name != 'Login' &&
    to.name != 'Signup' &&
    to.name != 'ForgetPassword' &&
    !isLoggedIn()
  ) {
    path = '/login';
  }

  next({ path });
});

export default router;
