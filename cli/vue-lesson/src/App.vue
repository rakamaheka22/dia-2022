<template>
  <!-- HTML -->
  <div>
    <h2>{{ fullName }}</h2>
    <p>{{ message }} : {{ count }} {{ messageCount }}</p>
    <span>Status : {{ status }}</span>
    <p>
      {{ getItem }}
    </p>
    <p>
      Check for more details <a v-bind:href="url" :title="title">Here</a>
    </p>
    <img v-bind:src="image" :alt="`Gambar ${title}`" />
    <div>
      <button v-on:click="incrementCount">Tambah Count</button>
      <button @click="dynamicIncrementCount(countItem)">Tambah Count Bebas</button>
      <button v-on:click="count--">Kurang Count</button>
    </div>
  </div>
</template>

<script>
// JS
export default {
  name: 'App',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      countItem: 2,
      title: 'Vue 3',
      image: 'https://via.placeholder.com/150/',
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
      if (newValue === 0) {
        this.isActive = false;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.incrementCount();
      this.fullName = 'John Cena';
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
}
</script>

<style>
/* CSS */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
