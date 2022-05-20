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
      <router-link :to="{ name: '' }"> <b>Create New Project</b></router-link>
    </button>
  </div>
  <!-- Price Tread pf material -->
  <div class="container"></div>
</template>
<script>
export default {
  name: "boq_generation",
  data() {
    return {
      users: [
        {
          name: "Thitisan",
          id: 1,
        },
        {
          name: "Phonmongkhon",
          id: 2,
        },
        {
          name: "Pasakon",
          id: 3,
        },
        {
          name: "Sahachan",
          id: 4,
        },
        {
          name: "Khemata",
          id: 5,
        },
      ],
    };
  },
  methods: {
    nextPage() {
      this.$router.push("/manage_account");
    },
  },
};
</script>

<style scoped></style>
