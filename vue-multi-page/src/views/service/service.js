import { Vue, $, Common } from 'js/base'
import store from '../../vuex/store'
import myHeader from '../../components/my/my-header.vue'
require('./scss/service.scss')
import service from './service.vue'
var homeVue = new Vue({
    el: '#service',
    store,
    template: '<div class="pageview"><my-header></my-header><service></service></div>',
    components: {
        'my-header': myHeader,
        'service': service
    }
})
