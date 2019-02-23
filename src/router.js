import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            // route level code-splitting
            component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/patches',
            name: 'patches',
            // route level code-splitting
            component: () => import(/* webpackChunkName: "patches" */ './views/Patches.vue')
        },
        {
            path: '/test',
            name: 'test',
            // route level code-splitting
            component: () => import(/* webpackChunkName: "test" */ './views/Test.vue')
        }
    ]
})
