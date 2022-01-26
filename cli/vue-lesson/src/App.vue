<template>
  <div>
    <nav class="menu">
      <router-link to="/" v-slot="{ isActive }">
        <span :class="{
          active: isActive
        }">
          Home
        </span>
      </router-link>
      <router-link to="/about" v-slot="{ isActive }">
        <span :class="{
          active: isActive
        }">
          About
        </span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.menu {
  width: 100%;
  padding: 16px;
  background: #2c3e50;
  color: #ffffff;
  display: flex;
  justify-content: center;
  gap: 32px;
}

.menu a {
  color: #ffffff;
  text-decoration: none;
}

.menu a:hover, .menu a:focus, .active {
  color: #00c180;
}
</style>
