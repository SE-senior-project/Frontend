<template>
  <!-- list -->
  <div class="container"></div>
  <!-- BOQ Table -->
  <div class="container">
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_template' }"> Back </router-link>
    </button>
  </div>
  <!-- Price Tread pf material -->
  <div class="container"></div>
</template>
<script>
export default {
  name: "show_template",
};
</script>

<style scoped></style>
