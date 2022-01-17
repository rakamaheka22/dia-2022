<template>
  <!-- HTML -->
  <div>
    <p>{{ message }} : {{ count }}</p>
    <span>Status : {{ isActive }}</span>
    <p>
      {{ showItem() }}
    </p>
    <p>
      Check for more details <a v-bind:href="url" :title="title">Here</a>
    </p>
    <img v-bind:src="image" :alt="`Gambar ${title}`" />
    <div>
      <button v-on:click="incrementCount">Tambah Count</button>
      <button @click="dynamicIncrementCount(countItem)">Tambah Count Bebas</button>
    </div>
  </div>
</template>

<script>
// JS
export default {
  name: 'App',
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
