<template>
  <Main>
    <template #header="{ title, description }">
      <Header :title="title" :description="description" />
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
      <keep-alive>
        <component
          :is="currentTab"
          :items="items"
          @updateTask="items = $event"
        ></component>
      </keep-alive>
    </div>
    <template #footer>
      Copyright &copy; 2022
    </template>
  </Main>
</template>

<script>
import { computed } from 'vue';

import Main from '../layouts/Main.vue';
import Header from '../components/Header.vue';
import SearchBox from '../components/SearchBox.vue';

import List from '../components/List.vue';
import AddForm from '../components/AddForm.vue';

export default {
  name: 'Home',
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
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await this.$store.dispatch('fetchNotes');
      if (res) {
        this.items = this.$store.getters.getListNotes;
      }
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
};
</script>

<style scoped>

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