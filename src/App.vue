<template>
  <OnemeasureNavigation />
  <br />
  <br />
  <br />
  <br />
  <br />
  <!-- <font-awesome-icon icon="user" />
  <br />
  <font-awesome-icon icon="user-plus" />
  <font-awesome-icon icon="fas fa-chart-line" />
  <br />
  <font-awesome-icon icon="sign-in-alt" />
  <br />
  <font-awesome-icon icon="sign-out-alt" /> -->
  <!-- <font-awesome-icon icon="address-book" />
  <font-awesome-icon icon="user" />
  <font-awesome-icon icon="city" /> -->
  <router-view />
</template>
<script>
import OnemeasureNavigation from "./components/Navigation.vue";
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
</style>
