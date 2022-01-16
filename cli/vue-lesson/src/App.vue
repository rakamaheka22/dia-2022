<template>
  <!-- HTML -->
  <div>
    <p>{{ message }} : {{ count }}</p>
    <span>Status : {{ isActive }}</span>
    <p>
      Id : <strong>{{ item.id }}</strong>
      Title : <strong>{{ item.title }}</strong>
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
        this.count = 1;
        this.isActive = true;
    }, 2000);
  },
  updated() {
    this.message = 'Message Updated! Count';
  },
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
