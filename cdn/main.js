// JS

// Setup Instalasi Vue
const App = {
    data() {
        return {
            countItem: 2,
            title: 'Vue 3',
            image: 'https://via.placeholder.com/150/',
            url: 'https://v3.vuejs.org/',
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
          this.incrementCount();
        }, 2000);
    },
    updated() {
        this.updateMessage('Message Updated! Count');
    },
    methods: {
        dynamicIncrementCount(count) {
            this.count += count;
        },
        incrementCount() {
            this.count += 1;
            if (this.count > 0) this.isActive = true;
        },
        updateMessage(message) {
            this.message = message;
        },
        showItem() {
            return `Id: ${this.item.id} Title: ${this.item.title}`;
        }
    }
};

Vue.createApp(App).mount('#app');
