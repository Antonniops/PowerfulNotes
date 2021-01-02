import Home from "../views/Home.vue";

export const routes = [
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
            path: "/notes/new",
            name: "Notes new",
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