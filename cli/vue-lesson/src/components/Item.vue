<template>
  <div class="item">
    <div>
      <p :class="{ compeleted: item.isComplete }" @click="updateTask(item)">
        {{ item.id }} {{ item.task }}
      </p>
      <span class="item-count">
        Note {{ item.id }}/{{ count }}
      </span>
    </div>
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
    },
    count() {
      return this.$store.getters.getCount;
    }
  },
  methods: {
    updateTask(item) {
      if (item.isComplete) {
        this.$router.push(`/${item.id}`)
      } else {
        this.$emit('updateTask', {
          id: item.id,
          isComplete: true
        });
      }
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

.item-count {
  font-size: 0.9rem;
  color: #a2a2a2;
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