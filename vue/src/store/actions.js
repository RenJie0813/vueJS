import * as types from './types.js'

export default {
    add: ({ commit, state }) => {
        console.log(state.mutations.data);
        commit(types.TODO.ADD);
    },
    reduce: ({ commit }) => {
        commit(types.TODO.REDUCE);
    },
    output: ({ commit }) => {
        commit(types.TODO.OUT);
    },
    back: ({ commit }) => {
        commit(types.TODO.BACK);
    }
}