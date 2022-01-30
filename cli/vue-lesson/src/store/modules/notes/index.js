import axios from 'axios';

const state = () => ({
    listNotes: [],
    note: null,
});

const mutations = {
    SET_LIST_NOTES: (state, value) => {
        state.listNotes = value;
    },
    SET_NOTE: (state, value) => {
        state.note = value;
    }
};

const getters = {
    getListNotes: (state) => {
        return state.listNotes;
    },
    getNote: (state) => {
        return state.note;
    }
};

const actions = {
    async fetchNotes({ commit }) {
        try {
            const res = await axios.get('Sheet1');
            const { data } = res;

            const mapData = data.map((item) => {
                if (item.isComplete === 'FALSE') {
                    item.isComplete = false;
                } else {
                    item.isComplete = true;
                }
                return item;
            });

            commit('SET_LIST_NOTES', mapData);
            commit('SET_COUNT', mapData.length, { root: true })

            return true;
        } catch (error) {
            return error;
        }
    },
    async findNotesById({ commit }, id) {
        try {
            const res = await axios.get(`Sheet1?search={"id":"${id}"}`);
            const { data } = res;

            const mapData = data.map((item) => {
                if (item.isComplete === 'FALSE') {
                    item.isComplete = false;
                } else {
                    item.isComplete = true;
                }
                return item;
            });

            commit('SET_NOTE', mapData[0]);

            return true;
        } catch (error) {
            return error;
        }
    },
    async updateNote({ commit }, payload) {
        try {
            const res = await axios.put('Sheet1', {
                condition: {
                    id: payload.id,
                },
                set: {
                    task: payload.task
                }
            });
            const { data } = res;
            return data;
        } catch (error) {
            return error;
        }
    },
    async addNote({ commit }, payload) {
        try {
            const res = await axios.post('Sheet1', [{
                id: payload.id,
                task: payload.task,
                isComplete: false
            }]);
            const { data } = res;
            return data;
        } catch (error) {
            return error;
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}