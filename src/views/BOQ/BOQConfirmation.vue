<template>
  <!-- list -->
  <div class="container"></div>
  <!-- BOQ Table -->
  <div class="container">
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_generation' }"> Back </router-link>
    </button>
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_template' }"> Confirm </router-link>
    </button>
  </div>
  <!-- Price Tread pf material -->
  <div class="container"></div>
</template>
<script>
export default {
  name: "boq_confirmation",
};
</script>

<style scoped></style>
