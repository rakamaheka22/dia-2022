<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }} {{ description }}</p>
    <router-link to="/login">
      Go to Login
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      count: 'getCount'
    }),
  }
}
</script>
