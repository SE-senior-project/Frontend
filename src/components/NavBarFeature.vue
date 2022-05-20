<template>
  <div id="nav">
    <router-link id="firstlink" :to="{ name: '' }">Home</router-link> |
    <router-link :to="{ name: '' }">Home</router-link> |
    <router-link :to="{ name: '' }">Home</router-link> |
    <router-link :to="{ name: '' }">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#firstlink {
  text-align: left;
  padding-right: 50px;
}
#nav {
  text-align: left;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #141414;
}
</style>
>
