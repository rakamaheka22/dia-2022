<template>
  <div class="detail">
    Catatan {{ id }}
    <h2>
      {{ selectedData.task }}
    </h2>
    <router-link :to="`/${id}/edit`">
      <button>Edit</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id'],
  data() {
    return {
      selectedData: {
        id: 0,
        task: '',
        isComplete: false
      },
    };
  },
  mounted() {
    this.selectedData = this.callApi()
      .filter((item) => {
        return item.id === parseInt(this.id, 10)
      })[0];
  }
}
</script>

<style scoped>
.detail {
  padding: 16px;
}

button {
  margin-bottom: 16px;
}
</style>