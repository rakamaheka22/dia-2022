<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }} {{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: String,
  },
  computed: {
    count() {
      return this.$store.getters['notes/getCount'];
    }
  }
}
</script>
