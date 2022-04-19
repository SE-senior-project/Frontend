<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    #F25A38
  </nav> -->

  <nav class="navbar navbar-expand-lg" style="background-color: #f25a38">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../src/assets/logonav.png" alt="" width="100" height="60" />
        Bootstrap
      </a>
    </div>
  </nav>
  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212326de;
}
nav {
  background-color: #f25a38;
}
/* nav {
  padding: 30px;
} */

/* nav a {
  font-weight: bold;
  color: #524c47e9;
}

nav a.router-link-exact-active {
  color: #f25a38;
} */
</style>
