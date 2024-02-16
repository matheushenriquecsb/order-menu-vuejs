<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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
    <Footer />
  </div>
</template>

<style>
* {
  font-family: 'Nunito', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 150px;
  margin-bottom: 0px;
}

h1 {
  text-align: center;
  font-size: 72px;
  margin-bottom: 30px;
  color: #222;
}

h2 {
  text-align: center;
  font-size: 45px;
  color: #222;
  border-bottom: 4px solid #fcba03;
  padding-bottom: 30px;
}
</style>
