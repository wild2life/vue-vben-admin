import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ant-design:ci-circle-filled',
      order: 1,
      title: '任务',
      hideChildrenInMenu: true,
      keepAlive: false,
    },
    name: 'task',
    path: '/task',
    component: () => import('#/views/task/index.vue'),
  },
];

export default routes;
