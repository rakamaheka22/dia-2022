<template>
  <div class="edit">
    <h4>Edit Catatan {{ $route.params.id }}</h4>
    <input v-model="selectedData.task" type="text" />
    <button @click="updateTask">Edit</button>
    <div style="margin-top: 16px;">
      <button @click="goToHome">Back to Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
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
    const res = await this.$store.dispatch('findNotesById', this.$route.params.id);
    if (res) {
      this.selectedData = this.$store.getters.getNote;
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    async updateTask() {
      const res = await this.$store.dispatch('updateNote', {
        id: this.$route.params.id,
        task: this.selectedData.task
      });
      if (res) {
        this.$router.push('/');
      }
    }
  },
};
</script>

<style scoped>
.edit {
  padding: 16px;
  background: #f5f5f5;
  width: 100%;
  height: 300px;
}
</style>