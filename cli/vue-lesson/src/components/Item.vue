<template>
  <div class="item">
    <p :class="{ compeleted: item.isComplete }" @click="updateTask(item.id)">
      {{ item.id }} {{ item.task }}
    </p>
    <span :class="{
      'status-completed': item.isComplete,
      'status-not-completed': !item.isComplete
    }">
      {{ status }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: 0,
          task: '',
          isComplete: false,
        }
      }
    }
  },
  computed: {
    status() {
      return this.item.isComplete ? 'Sudah Tercapai' : 'Belum Tercapai';
    }
  },
  methods: {
    updateTask(id) {
      this.$emit('updateTask', {
        id,
        isComplete: true
      })
    }
  }
}
</script>

<style scoped>
.item {
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-completed {
  color: green;
}

.status-not-completed {
  color: red;
}

.compeleted {
  text-decoration: line-through;
}

p {
  cursor: pointer;
}
</style>