<template>
  <div id="nav">
    <!-- don't forget to change params to userid -->
    <router-link
      id="firstlink"
      :to="{ name: 'material_list', params: { id: 1 } }"
      >Material</router-link
    >
    | <router-link :to="{ name: '' }">BOQ Generation </router-link> |
    <router-link :to="{ name: '' }">Project Schedule</router-link> |
    <router-link :to="{ name: '' }">Check list</router-link>
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
  color: #487eb4;
}

#nav a.router-link-exact-active {
  color: #d96262;
}
</style>
>
