// JS

// Setup Instalasi Vue
const App = {
    data() {
        return {
            count: 0,
            message: 'Message Count',
            isActive: false,
            lists: [],
            item: {
                id: 0,
                title: 'Item #1',
            },
        };
    },
    mounted() {
        setTimeout(() => {
            this.count = 1;
            this.isActive = true;
        }, 2000);
    },
    updated() {
        this.message = 'Message Updated! Count';
    },
};

Vue.createApp(App).mount('#app');
