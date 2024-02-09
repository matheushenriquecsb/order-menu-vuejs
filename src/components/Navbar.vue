<script>
export default {
  name: 'Navbar',
  props: ['logo', 'alt']
}
</script>

<template>
  <div>
    <div id="nav">
      <RouterLink id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt" />
      </RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/order">Pedidos</RouterLink>
    </div>
  </div>
</template>

<style scoped>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 45px;
  height: 45px;
}

#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  font-size: 25px;
  font-weight: 500;
  transition: 0.5s;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#nav a:hover {
  color: #fff;
}
</style>
