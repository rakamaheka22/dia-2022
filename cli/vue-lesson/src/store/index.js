import { createStore } from 'vuex';
import notes from './modules/notes';

import { auth } from '../firebase';

import {
    updateProfile,
    createUserWithEmailAndPassword
} from 'firebase/auth';

const store = createStore({
    state: () => ({
        count: 0,
        year: 2022,
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
        SET_YEAR: (state, value) => {
            state.year = value;
        },
    },
    actions: {
        async register({}, payload) {
            const { email, password, name } = payload;
            try {
                if (email && password) {
                    const data = await createUserWithEmailAndPassword(auth, email, password);

                    await updateProfile(data.user, {displayName: name});
                    return true;
                }
            } catch (error) {
                return false;
            }
        }
    },
    modules: {
        notes
    }
});

export default store;