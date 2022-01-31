<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }} {{ description }}</p>
    <router-link v-if="!user" to="/login">
      <button>Go to Login</button>
    </router-link>
    <button v-else @click="doLogout">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
      count: 'getCount',
      user: 'getUserInfo'
    }),
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    async doLogout() {
      await this.logout();
      location.reload();
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 16px;
  background: transparent;
  color: #ffffff;
}
</style>