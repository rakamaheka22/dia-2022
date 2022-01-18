// JS

// Setup Instalasi Vue
const App = {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      countItem: 2,
      title: 'Vue 3',
      image: 'https://via.placeholder.com/250/',
      url: 'https://v3.vuejs.org/',
      count: 0,
      message: 'Message Count',
      messageCount: '',
      isActive: false,
      lists: [],
      item: {
        id: 0,
        title: 'Item #1',
      },
    };
  },
  computed: {
    getItem() {
      return `Id: ${this.item.id} Title: ${this.item.title}`;
    },
    status() {
      return this.isActive ? 'Yes' : 'No';
    },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const name = newValue.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
      }
    }
  },
  watch: {
    count(newValue) {
      if (newValue > 10) {
        this.messageCount = 'Count melebihi 10 item';
      }
      if (newValue <= 10) {
        this.messageCount = '';
        this.isActive = false;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.incrementCount();
      this.fullName = 'John Cena';
      this.lists = [
        {
          id: 1,
          title: 'Bangun Tidur'
        },
        {
          id: 2,
          title: 'Nonton Kartun'
        },
        {
          id: 3,
          title: 'Mandi Pagi'
        },
        {
          id: 4,
          title: 'Berangkat Sekolah'
        },
        {
          id: 5,
          title: 'Istirahat Sekolah'
        },
        {
          id: 6,
          title: 'Ekstrakurikuler'
        },
        {
          id: 7,
          title: 'Pulang Sekolah'
        },
        {
          id: 8,
          title: 'Mandi Sore'
        },
        {
          id: 9,
          title: 'Makan Malam'
        },
        {
          id: 10,
          title: 'Mengerjakan PR'
        },
        {
          id: 11,
          title: 'Tidur'
        }
      ];
    }, 2000);
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
