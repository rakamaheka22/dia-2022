import { createStore } from 'vuex';
import notes from './modules/notes';

const store = createStore({
    state: () => ({
        count: 0,
    }),
    getters: {
        getCount: (state, getters, rootState, rootGetters) => {
            return state.count || rootGetters.getListNotes;
        },
    },
    mutations: {
        SET_COUNT: (state, value) => {
            state.count = value;
        },
    },
    modules: {
        notes
    }
});

export default store;