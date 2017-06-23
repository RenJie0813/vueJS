import * as types from './types.js'
import getters from './getters.js'

const state = {
    data: {
        name: 'tom',
        num: 1818,
        isBack: false
    }
}

const mutations = {
    [types.TODO.ADD](state) {
        state.data.num++;
    },
    [types.TODO.REDUCE](state) {
        state.data.num--;
    },
    [types.TODO.OUT](state) {
        console.log(state.data.num);
    },
    [types.TODO.BACK](state) {
        state.data.isBack = !state.data.isBack;
    }
}

export default {
    state,
    mutations,
    getters
}