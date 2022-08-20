<template>
  <ul>
    <li v-for="list in GStore.allList" :key="list.id">
      <p>
        <b><span> </span>{{ list.list_name }}</b>
      </p>
      <p><span> </span> :{{ list.list_description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["GStore"],
};
</script>

<style scoped>
span {
  padding: 10px;
}
</style>
