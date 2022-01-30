<template>
  <div class="container">
    <header>
      <slot name="header" :title="title" :description="description" ></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
  data() {
    return {
      title: 'My Notes',
      description: 'Catatan Kegiatan Harianku',
    }
  },
  async mounted() {
    const res = await this.$store.dispatch('isUserLoggon');
    if (res) {
      this.title = await `${this.$store.getters.getUserInfo?.displayName} Notes`;
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  color: #FFFFFF;
  background-color: #00c180;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

footer {
  font-weight: bold;
}
</style>