<script>
import Banner from '../components/Banner.vue'
import BurguerForm from '../components/BurguerForm.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    BurguerForm
  }
}
</script>

<template>
  <div>
    <Banner />
    <div class="main-container">
      <h2 class="title">Escolha os Ingredientes</h2>
    </div>
    <BurguerForm />
  </div>
</template>

<style></style>
