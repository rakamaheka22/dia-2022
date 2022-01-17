<template>
  <!-- HTML -->
  <div>
    <p>{{ message }} : {{ count }}</p>
    <span>Status : {{ isActive }}</span>
    <p>
      {{ showItem() }}
    </p>
  </div>
</template>

<script>
// JS
export default {
  name: 'App',
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
      this.incrementCount();
    }, 2000);
  },
  updated() {
    this.updateMessage('Message Updated! Count');
  },
  methods: {
    incrementCount() {
      this.count += 1;
      if (this.count > 0) this.isActive = true;
    },
    updateMessage(message) {
      this.message = message;
    },
    showItem() {
      return 'Id: ' + this.item.id + ' Title: ' + this.item.title;
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
