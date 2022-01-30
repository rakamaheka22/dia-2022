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
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      getNote: 'notes/getNote'
    })
  },
  async mounted() {
    const res = await this.findNotesById(this.$route.params.id);
    if (res) {
      this.selectedData = this.getNote;
    }
  },
  methods: {
    ...mapActions({
      findNotesById: 'notes/findNotesById',
      updateNote: 'notes/updateNote'
    }),
    goToHome() {
      this.$router.push('/');
    },
    async updateTask() {
      const res = await this.updateNote({
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