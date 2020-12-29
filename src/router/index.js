import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/notes",
        name: "Notes",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Notes.vue")
      },
      {
        path: '**',
        name: "Notes",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Notes.vue")
      },

    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
