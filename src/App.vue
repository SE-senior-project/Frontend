<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    #F25A38
  </nav> -->
  <OnemeasureNavigation />
  <br />
  <br />
  <br />
  <br />
  <br />
  <!-- <nav class="navbar navbar-expand-lg">
    <div class="d-flex justify-content-start">
      <h3><b>OneMeasure</b></h3>
      <img src="../src/assets/logonav.jpg" alt="" width="100" height="60" />
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-light btnSubmit">
        <b>Sign Out</b>
      </button>
    </div>
  </nav> -->
  <router-view />
</template>
<script>
import OnemeasureNavigation from "./components/OnemeasureNavigation.vue";
export default {
  components: {
    OnemeasureNavigation,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212326de;
}
/* nav {
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff914d;
} */
/* .sameline {
  padding-left: 20px;
  color: white;
}
.btnSubmit {
  color: #282726;
  background-color: #fff;
  border-radius: 1.5rem;
  border: 1px solid rgba(100, 97, 97, 0.436);
  padding: 2%;
}
.btnSubmit:hover {
  box-shadow: 0 5px 8px 0 rgba(245, 103, 1, 0.2),
    0 9px 26px 0 rgba(245, 103, 1, 0.19);
  font-style: italic;
} */
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
