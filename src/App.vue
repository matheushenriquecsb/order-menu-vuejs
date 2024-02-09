<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },

  data() {
    return {
      logo_src: '/images/logo.png',
      app_name: 'Make Your Burger'
    }
  }
}
</script>

<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 72px;
  margin-bottom: 30px;
  color: #222;
}
</style>
