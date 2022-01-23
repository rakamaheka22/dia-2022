<template>
  <header>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'description'],
}
</script>
