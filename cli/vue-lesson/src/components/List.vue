<template>
  <div class="list-item">
    <ul v-if="items.length > 0">
      <li v-for="(item, index) in items" :key="index">
        <Item :item="item" @updateTask="updateTask($event)" />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'List',
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    updateTask(item) {
      const foundIndex = this.items
        .findIndex(x => x.id == item.id);
      this.items[foundIndex].isComplete = item.isComplete;
      this.$emit('updateTask', this.items);
    },
  }
}
</script>

<style scoped>
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