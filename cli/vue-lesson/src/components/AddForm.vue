<template>
  <div class="form-note">
    <div>
      <label for="input">Note : </label>
      <input v-model="note" type="text" id="input" />
    </div>
    <button @click="addNote">
      Add Note
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddForm',
  data() {
    return {
      note: ''
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    }),
  },
  methods: {
    async addNote() {
      const res = await this.$store.dispatch('notes/addNote', {
        id: this.count + 1,
        task: this.capitalizeWords(this.note)
      });
      if (res) {
        this.$moshaToast('Berhasil Menambahkan Note', {
          position: 'bottom-center',
          type: 'success'
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
.form-note button {
  margin-top: 16px;
}
</style>