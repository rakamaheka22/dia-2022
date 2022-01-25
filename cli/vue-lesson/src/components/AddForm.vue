<template>
  <form class="form-note">
    <div>
      <label for="input">Note : </label>
      <input type="text" id="input" />
    </div>
    <button>
      Add Note
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddForm',
}
</script>

<style scoped>
.form-note button {
  margin-top: 16px;
}
</style>