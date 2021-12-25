import Vue from 'vue';
import VueRouter from 'vue-router';
// import { isLoggedIn } from './../utilities/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/signup',
    name: 'SingUp',
    component: () => import(/* webpackChunkName: "login" */ '@/views/signup.vue'),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '@/views/settings.vue'),
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "forgot" */ '@/views/forgot.vue'),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "reset" */ '@/views/reset.vue'),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: () => import(/* webpackChunkName: "course" */ '@/views/course.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
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

// router.beforeEach((to, from, next) => {
//   let path = '';
//   if (to.name == 'Login' && isLoggedIn()) {
//     path = '/';
//   } else if (to.name == 'Signup' && isLoggedIn()) {
//     path = '/';
//   } else if (
//     to.name != 'Login' &&
//     to.name != 'Signup' &&
//     to.name != 'ForgetPassword' &&
//     !isLoggedIn()
//   ) {
//     path = '/login';
//   }

//   next({ path });
// });

export default router;
