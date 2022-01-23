<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ count }} {{ description }}</p>
  </header>
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
    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>
