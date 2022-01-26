import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Detail from '../views/Detail.vue';
import Edit from '../views/Edit.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:id', component: Detail, props: true, children: [
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

export default router;