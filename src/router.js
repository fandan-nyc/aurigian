import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/Home.vue";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history", // 启用"history"模式
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
      },
    },
    // {
    //   path: "/",
    //   name: "aboutus",
    //   components: {
    //     header: AppHeader,
    //     default: Aboutus,
    //     footer: AppFooter,
    //   },
    // },
    // {
    //   path: "/components",
    //   name: "components",
    //   components: {
    //     header: AppHeader,
    //     default: Components,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: {
    //     header: AppHeader,
    //     default: Landing,
    //     footer: AppFooter
    //   }
    // },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    // {
    //   path: "/register",
    //   name: "register",
    //   components: {
    //     header: AppHeader,
    //     default: Register,
    //     footer: AppFooter
    //   }
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: {
    //     header: AppHeader,
    //     default: Profile,
    //     footer: AppFooter
    //   }
    // }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
