import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import List from "../components/List.vue";
import Detail from "../components/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    children: [
      { path: "/author", component: Author.vue },
      { path: "/comment", component: Comment.vue },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
