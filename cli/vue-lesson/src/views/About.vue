<template>
  <div class="about">
    ABOUT PAGE
    <button @click="goToHome">Back to Home</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.about {
  padding: 16px;
}
</style>