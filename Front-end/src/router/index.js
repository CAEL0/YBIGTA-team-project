import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Q1 from '../views/Q1.vue'
import Q2 from '../views/Q2.vue'
import Q3 from '../views/Q3.vue'
import result_loading from '../views/ResultLoading.vue'

import result1 from '../views/results/result1.vue'
import result2 from '../views/results/result2.vue'
import result3 from '../views/results/result3.vue'
import result4 from '../views/results/result4.vue'
import result5 from '../views/results/result5.vue'
import result6 from '../views/results/result6.vue'
import result7 from '../views/results/result7.vue'
import result8 from '../views/results/result8.vue'
import result9 from '../views/results/result9.vue'
import result10 from '../views/results/result10.vue'
import result11 from '../views/results/result11.vue'
import result12 from '../views/results/result12.vue'
import result13 from '../views/results/result13.vue'
import result14 from '../views/results/result14.vue'
import result15 from '../views/results/result15.vue'
import result16 from '../views/results/result16.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        page: 1
      }
    },
    {
      path: '/q1',
      name: 'Q1',
      component: Q1,
      meta: {
        page: 2
      }
    },
    {
      path: '/q2',
      name: 'Q2',
      component: Q2,
      meta: {
        page: 3
      }
    },
    {
      path: '/q3',
      name: 'Q3',
      component: Q3,
      meta: {
        page: 4
      }
    },
    {
      path: '/result_loading',
      name: 'result_loading',
      component: result_loading,
      transitionName: 'fade'
    },
    {
      path: '/result1',
      name: 'result1',
      component: result1,
      transitionName: 'fade'
    },
    {
      path: '/result2',
      name: 'result2',
      component: result2,
      transitionName: 'fade'
    },
    {
      path: '/result3',
      name: 'result3',
      component: result3,
      transitionName: 'fade'
    },
    {
      path: '/result4',
      name: 'result4',
      component: result4,
      transitionName: 'fade'
    },
    {
      path: '/result5',
      name: 'result5',
      component: result5,
      transitionName: 'fade'
    },
    {
      path: '/result6',
      name: 'result6',
      component: result6,
      transitionName: 'fade'
    },
    {
      path: '/result7',
      name: 'result7',
      component: result7,
      transitionName: 'fade'
    },
    {
      path: '/result8',
      name: 'result8',
      component: result8,
      transitionName: 'fade'
    },   
    {
      path: '/result9',
      name: 'result9',
      component: result9,
      transitionName: 'fade'
    },
    {
      path: '/result10',
      name: 'result10',
      component: result10,
      transitionName: 'fade'
    },
    {
      path: '/result11',
      name: 'result11',
      component: result11,
      transitionName: 'fade'
    },
    {
      path: '/result12',
      name: 'result12',
      component: result12,
      transitionName: 'fade'
    },
    {
      path: '/result13',
      name: 'result13',
      component: result13,
      transitionName: 'fade'
    },
    {
      path: '/result14',
      name: 'result14',
      component: result14,
      transitionName: 'fade'
    },
    {
      path: '/result15',
      name: 'result15',
      component: result15,
      transitionName: 'fade'
    },
    {
      path: '/result16',
      name: 'result16',
      component: result16,
      transitionName: 'fade'
    },     
  ]

});
