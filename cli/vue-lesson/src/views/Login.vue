<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="doLogin">
      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="form.password" type="password" id="password" />
      </div>
      <div>
        <button role="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async doLogin() {
      const res = await this.login(this.form);
      if (res && res.user) {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style>

</style>