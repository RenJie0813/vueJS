import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import List from '../views/list'
import Deal from '../views/deal'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/deal',
            name: 'Deal',
            component: Deal
        },
        {
            path: '/service',
            name: 'Service',
            component: List
        },
        {
            path: '/person',
            name: 'Person',
            component: List
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})