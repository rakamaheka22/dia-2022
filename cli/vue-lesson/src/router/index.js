import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Detail from '../views/Detail.vue';
import Edit from '../views/Edit.vue';

const routes = [
  { path: '/', component: Home, meta: { auth: true } },
  { path: '/about', component: About, meta: { auth: false } },
  { path: '/login', component: Login, meta: { auth: false } },
  { path: '/:id', component: Detail, props: true, meta: { auth: true }, children: [
    {
      path: 'edit', component: Edit
    }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    
    const isLoggedIn = await store.dispatch('isUserLoggon');

    if (!isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;