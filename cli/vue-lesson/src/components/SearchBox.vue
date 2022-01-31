<template>
  <div>
    <input v-model="search" type="text" placeholder="Search..." @input="doSearch" />
    <button v-if="search" @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    doSearch($event) {
      this.$emit('result', $event.target.value);
    },
    reset() {
      this.search = '';
      this.$emit('result', '');
    }
  }
}
</script>

<style scoped>
input {
  border: 0;
  border-radius: 5px;
  height: 32px;
  padding: 5px 16px;
}

button {
  margin-left: 10px;
  height: 32px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  background: transparent;
}
</style>