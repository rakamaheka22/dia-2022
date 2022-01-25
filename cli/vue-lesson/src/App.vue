<template>
  <Main>
    <template #header="{ title, description }">
      <Header :title="title" :description="description" :count="count" />
      <SearchBox @result="onSearch($event)" />
    </template>
    <div class="tab-button-wrapper">
      <button
        v-for="(tab, index) in listTabs"
        :key="index"
        class="tab-button"
        :class="{
          'tab-button--active': currentTab === tab
        }"
        @click="currentTab = tab"
      >
        {{ tabName(tab) }}
      </button>
    </div>
    <div class="tab-view-wrapper">
      <component
        :is="currentTab"
        :items="items"
        @updateTask="items = $event"
      ></component>
    </div>
    <template #footer>
      Copyright &copy; 2022
    </template>
  </Main>
</template>

<script>
import Main from './layouts/Main.vue';
import Header from './components/Header.vue';
import SearchBox from './components/SearchBox.vue';

import List from './components/List.vue';
import AddForm from './components/AddForm.vue';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      currentTab: 'List',
      listTabs: ['List', 'AddForm']
    };
  },
  components: {
    Header,
    SearchBox,
    Main,
    List,
    AddForm
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
    tabName(name) {
      if (name === 'List') return 'List Notes';
      if (name === 'AddForm') return 'Add New Note';
      return name;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.tab-view-wrapper {
  padding: 0px 16px 16px 16px;
}

.tab-button-wrapper {
  padding: 16px;
}

.tab-button {
  border: 0px;
  font-size: 1.2rem;
  background: #FFFFFF;
  padding: 5px 16px;
  color: #A2A2A2;
}

.tab-button--active {
  color: #00C180;
  border-bottom: 1px solid #00C180;
}
</style>
