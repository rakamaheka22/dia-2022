import { createStore } from 'vuex';
import notes from './modules/notes';

const store = createStore({
    modules: {
        notes
    }
});

export default store;