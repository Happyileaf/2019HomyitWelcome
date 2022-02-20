import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/Home'
import Index from '@/pages/Index'
import Intro from '@/pages/Intro'
import Balloon from '@/pages/Balloon'
import Case from '@/pages/Case'
import HomeRoad from '@/pages/HomeRoad'
import Email from '@/pages/Email'
import House from '@/pages/House'
import Housein from '@/pages/Housein'
import Connect from '@/pages/Connect'
import Login from '@/pages/Login'

import err404 from '@/pages/err404'

// import Building from '@/pages/Building'

import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/home"
    },

    // {
    //   path: '/home',
    //   name: 'home',
    //   components: {
    //     default: Index,
    //     intro: Intro,
    //     balloon: Balloon,
    //     case: Case,
    //     homeroad: HomeRoad,

    //   }
    // },
    {
      path: '/home',
      name: 'home',
      component: Home
      
    },
    {
      path: '/building',
      name: 'building',
      components: {
        house: House,
        housein: Housein,
      }
    },



    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
    },

    {
      path: '/balloon',
      name: 'balloon',
      component: Balloon,
    },

    {
      path: '/case',
      name: 'case',
      component: Case,
    },


    {
      path: '/homeroad',
      name: 'homeroad',
      component: HomeRoad,
    },
    {
      path: '/house',
      name: 'house',
      component: House,
    },
    {
      path: '/housein',
      name: 'housein',
      component: Housein,
    },

    {
      path: '/email',
      name: 'emial',
      component: Email,
    },

    {
      path: '/nav',
      name: 'nav',
      component: Nav,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,

    },
    {
      path: '/register',
      name: 'register',
      component: Login,
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect,
    },

    {
      path: '*',
      component: err404
    },
  ]
})
