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
