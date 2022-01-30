<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }} {{ description }}</p>
    <router-link v-if="!user" to="/login">
      Go to Login
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
