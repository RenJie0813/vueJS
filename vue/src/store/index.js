/**
 * Created by Administrator on 2017/5/29.
 * you are making L whth xiaozemaliya when you read my code.
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';

export default new Vuex.Store({
    modules: {
        mutations
    },
    actions
})