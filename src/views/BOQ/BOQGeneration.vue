<template>
  <!-- list -->
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">BOQ Name</label>
        <input
          type="boqGeneration"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <button class="btn btn-primary">Search</button>
      <button class="btn btn-primary">Add</button>
      <button class="btn btn-primary">Edit</button>
    </form>
  </div>
  <!-- BOQ Table -->
  <div class="container">
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_confirmation' }"> Submit </router-link>
    </button>
  </div>
  <!-- Price Tread pf material -->
  <div class="container"></div>
</template>
<script>
export default {
  name: "boq_generation",
};
</script>

<style scoped></style>
