import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import store from './store'


Vue.use(Router)




const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,     
        },
        {
            path: '/register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue'),          
        }
    ]
})



let isLogged = false
  
router.beforeEach((to, from, next) => {
    // isLogged = localStorage.getItem("isLogged")
    isLogged = store.state.isLogged
    console.log(isLogged)
    if (  !isLogged && to.path !== '/register' ) {
      next("/register")
    } else {
      next()
    }
});

export default router