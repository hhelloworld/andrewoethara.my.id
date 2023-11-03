import Vue from "vue";
import VueRouter from "vue-router";
import logor from "../loginA.vue";
import rega from "../registerA.vue";

// import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "login",
    component: logor,
    meta: {
      requireNothing: true,
    },
  },
  {
    path: "/Register",
    name: "register",
    component: rega,
    meta: {
      requireNothing: true,
    },
  },

  {
    path: "/verified/:token",
    name: "verified",
    component: () => import(/* webpackChunkName: "about" */ "../views/verifiedPage.vue"),
  },

  {
    path: "/",
    name: "welcome",
    component: () => import(/* webpackChunkName: "about" */ "../views/homePage.vue"),
    meta: {
      description: "Embark on an inspirational journey through our carefully curated blog, where we explore the world's wonders, share stories of triumph, and offer insights that empower you to lead a life filled with purpose and creativity. Join our community of dreamers, doers, and visionaries, and let the magic of inspiration ignite your soul. Your path to a brighter tomorrow begins here."
    },    
    children: [
      {
        path: "Family-Tree",
        name: "Family-Tree",
        component: () => import(/* webpackChunkName: "about" */ "../views/aboutMe.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "Articles",
        name: "Articles",
        component: () => import(/* webpackChunkName: "about" */ "../views/articlesView.vue"),
      },
      {
        path: "Profil",
        name: "profil",
        component: () => import(/* webpackChunkName: "about" */ "../views/setUp.vue"),
        props: (route) => ({ email: route.query.email }),
        meta: {
          requiresAuth: true,
        },
      },

      {
        path: "Edit",
        name: "editProfile",
        component: () => import(/* webpackChunkName: "about" */ "../views/editProfile.vue"),
        meta: {
          requiresAuth: true,
        },
      },

      {
        path: "/article/:slug",
        name: "reading",
        meta: {

        },
        component: () => import(/* webpackChunkName: "about" */ "../views/readingPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requireNothing = to.matched.some((x) => x.meta.requireNothing);

  const isAuthenticated = JSON.parse(localStorage.getItem("token"));
  console.log(router);

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (requireNothing && isAuthenticated) {
    next({ name: "profil" && "editProfile" && "Family-Tree"});
  } else {
    next();
  }
});

export default router;
