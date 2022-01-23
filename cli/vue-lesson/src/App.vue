<template>
  <div>
    <Header :title="title" :description="description" :count="count" />
    <SearchBox @result="onSearch($event)" />
    <div class="list-item">
      <ul v-if="items.length > 0">
        <li v-for="(item, index) in items" :key="index">
          <Item :item="item" @updateTask="updateTask($event)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Item from './components/Item.vue';
import SearchBox from './components/SearchBox.vue';

export default {
  name: 'App',
  data() {
    return {
      title: 'My Notes',
      description: 'Catatan Kegiatan Harianku',
      items: [],
    };
  },
  components: {
    Header,
    SearchBox,
    Item
  },
  computed: {
    count() {
      return this.items.length;
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.items = [
        {
          id: 1,
          task: 'Olahraga Pagi',
          isComplete: false
        },
        {
          id: 2,
          task: 'Sarapan Buah',
          isComplete: false
        },
        {
          id: 3,
          task: 'Ngoding Web Task 1',
          isComplete: false
        },
        {
          id: 4,
          task: 'Meeting dengan Tim',
          isComplete: false
        },
        {
          id: 5,
          task: 'Ngoding Web Task 2',
          isComplete: false
        },
        {
          id: 6,
          task: 'Belanja ke Mall',
          isComplete: false
        },
        {
          id: 7,
          task: 'Makan Malam di Yoshinoya',
          isComplete: false
        },
        {
          id: 8,
          task: 'Pulang Beli Martabak',
          isComplete: false
        },
      ]
    },
    onSearch(result) {
      if (result) {
        const updatedData = this.items
          .filter(
            (item) => item.task.toLowerCase().includes(result)
          );
        this.items = updatedData;
      } else {
        this.fetchData();
      }
    },
    updateTask(item) {
      const foundIndex = this.items
        .findIndex(x => x.id == item.id);
      this.items[foundIndex].isComplete = item.isComplete;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.list-item {
  text-align: left;
  max-width: 400px;
  margin: auto;
}

.list-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
