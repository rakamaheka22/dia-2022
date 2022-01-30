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
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      getNote: 'notes/getNote'
    })
  },
  async mounted() {
    const res = await this.findNotesById(this.id);
    if (res) {
      this.selectedData = this.getNote;
    }
  },
  methods: {
    ...mapActions({
      findNotesById: 'notes/findNotesById'
    })
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