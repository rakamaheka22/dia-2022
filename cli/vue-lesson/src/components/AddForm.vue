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
export default {
  name: 'AddForm',
  data() {
    return {
      note: ''
    }
  },
  methods: {
    addNote() {
      console.log(this.note);
      console.log(this.capitalizeWords(this.note));
      this.$moshaToast('Berhasil Menambahkan Note', {
        position: 'bottom-center',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped>
.form-note button {
  margin-top: 16px;
}
</style>