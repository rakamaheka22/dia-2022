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
  async mounted() {
    const res = await this.$store.dispatch('notes/findNotesById', this.id);
    if (res) {
      this.selectedData = this.$store.getters['notes/getNote'];
    }
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