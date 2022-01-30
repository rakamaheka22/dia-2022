import { createStore } from 'vuex';
import notes from './modules/notes';

import { auth } from '../firebase';

import {
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
    state: () => ({
        count: 0,
        year: 2022,
        user_info: null,
    }),
    getters: {
        getCount: (state, getters, rootState, rootGetters) => {
            return state.count || rootGetters.getListNotes;
        },
        getUserInfo: (state) => {
            return state.user_info;
        }
    },
    mutations: {
        SET_COUNT: (state, value) => {
            state.count = value;
        },
        SET_YEAR: (state, value) => {
            state.year = value;
        },
        SET_USER_INFO: (state, value) => {
            state.user_info = value;
        }
    },
    actions: {
        isUserLoggon({ commit }) {
            return new Promise((resolve, reject) => {
                onAuthStateChanged(auth, user => {
                    if (user) {
                        commit('SET_USER_INFO', user);
                        resolve(true);
                    } else{
                        commit('SET_USER_INFO', null);
                        resolve(false);
                    }
                }, err => {
                    reject(err);
                });
            });
        },
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
        },
        async login({}, payload) {
            const { email, password } = payload;
            try {
                if (email && password) {
                    const loggedIn = await signInWithEmailAndPassword(auth, email, password);
                    return loggedIn;
                }
            } catch (error) {
                return false;
            }
        },
        async logout({}) {
            try {
                await signOut(auth);
                return true;
            } catch (error) {
                return false;
            }
        },
    },
    modules: {
        notes
    }
});

export default store;