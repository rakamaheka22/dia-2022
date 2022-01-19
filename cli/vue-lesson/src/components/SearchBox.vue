<template>
  <div>
    <input v-model="search" type="text" />
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
}
</script>
