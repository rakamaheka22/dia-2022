import { createStore } from 'vuex';

const store = createStore({
    state: () => ({
        count: 0
    }),
    mutations: {
        SET_COUNT: (state, value) => {
            state.count = value;
        }
    }
});

export default store;