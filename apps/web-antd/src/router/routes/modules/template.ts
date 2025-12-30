import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'carbon:template',
      keepAlive: false,
      order: 3,
      title: '模版',
    },
    name: 'TaskTemplate',
    path: '/template',
    component: () => import('#/views/template/index.vue'),
  },
];

export default routes;
