import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "TodoList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/todo-list")
  },
  {
    path: "/user/:id",
    component: () => import("../views/router/RouterDemo"),
    name: "3",
    props: true,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: "profile",
        component: () => import("../views/router/RouterChildrenDemo"),
        name: "3-1"
      },
      {
        // 当 /user/:id/posts 匹配成功
        // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
        path: "posts",
        component: () => import("../views/router/RouterChildrenDemo")
      }
    ]
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
