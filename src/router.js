import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


const router = new Router({
    routes: [
    { path: '/*', redirect: { name: 'home' } },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/HomePage')
    },
    {
      path: "/film/:id",
      name: "film",
      component: () => import('./views/FilmDetail')
    },
    {
      path: "/character/:id",
      name: "character",
      component: () => import('./views/CharacterDetail')
    }
    ]
})

router.beforeEach((to, from, next) => {
    if (from.name) {
        router.prevLastState = from.name;
        router.prevQueryState = from.query;
    }
    if (to.name == 'login') {
        router.prevLastState = null;
    }
    next();
});

export default router;