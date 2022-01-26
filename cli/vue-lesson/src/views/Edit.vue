<template>
  <div class="edit">
    <h4>Edit Catatan {{ $route.params.id }}</h4>
    <input v-model="selectedData.task" type="text" />
    <button>Edit</button>
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
    this.selectedData = await this.callApi()
      .filter((item) => {
        return item.id === parseInt(this.$route.params.id, 10)
      })[0];
  },
  methods: {
    goToHome() {
      this.$router.push('/');
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