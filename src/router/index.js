import { createRouter, createWebHashHistory } from 'vue-router';

// import { usePermissionStore } from '@/store/permission';

/**
 * 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
 * 没有权限要求的页面
 * 所有角色都可以访问
 */
export const constantRoutes = [
  //   {
  //     path: '/redirect',
  //     component: Layout,
  //     hidden: true,
  //     children: [
  //       {
  //         path: '/redirect/:path(.*)',
  //         component: () => import('@/views/redirect/redirect')
  //       }
  //     ]
  //   },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

/**
 * @method resetRouter
 */
// export const resetRouter = () => {
//   const permissionStore = usePermissionStore();

//   router.getRoutes().forEach((route) => {
//     const { name } = route;
//     if (name && permissionStore.addRoutes.find((item) => item.name === name)) {
//       router.removeRoute(name);
//     }
//   });
// };

export default router;
