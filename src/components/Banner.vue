<script>
export default {
  name: 'Banner'
}
</script>

<template>
  <div id="main-banner">
    <h1 class="title-banner">King's Burguer</h1>
  </div>
</template>

<style scoped>
#main-banner {
  background-image: url('/images/burger.jpg');
  background-position: 0 -350px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 60px;
  padding: 20px 40px;
}

.title-banner {
  margin-left: 60px;
  font-weight: 800;
}
</style>
