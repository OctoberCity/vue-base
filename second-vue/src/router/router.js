import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from '../pages/index.vue'
import OrderLsit from '../pages/OrderLsit.vue'

import DetailPage from '../pages/detail.vue'
import LolGames from '../pages/detail/lolGames.vue'
import DxcGames from '../pages/detail/dxcGames.vue'
import TrueJLGames from '../pages/detail/trueJLGames.vue'
import TrueJLGames2 from '../pages/detail/trueJLGames2.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [{
    path: '/',
    component: indexPage
  },
  {
    path: 'orderList',
    component: OrderLsit
  },
  {
    path: '/detail',
    component: DetailPage,
    children: [{
      path: 'lolGames',
      component: LolGames
    },
    {
      path: 'dxcGames',
      component: DxcGames
    },
    {
      path: 'trueJLGames',
      component: TrueJLGames
    },
    {
      path: 'trueJLGames2',
      component: TrueJLGames2
    }

    ]
  }
  ]
})

export default router
