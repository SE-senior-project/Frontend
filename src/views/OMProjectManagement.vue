<template>
  <div>
    <br />
    <div class="wrapper">
      <div class="OnemeasurePM">Project Onemeasure</div>
      <div class="row">
        <OnemeasurePM v-for="x in users" :key="x.id" :user="x" />
      </div>
    </div>
  </div>
</template>

<script>
import OnemeasurePM from "../components/OMPM.vue";
export default {
  name: "OMprojectmanagement",
  components: {
    OnemeasurePM,
  },
  data() {
    return {
      users: [
        {
          name: "thitisan",
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
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}

.OnemeasurePM {
  width: 95%;
  margin: 0 auto;
  height: 50px;
  text-align: left;
  display: flex;
  justify-content: left;
  align-items: left;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;
}
@media screen and (max-width: 800px) {
  .OnemeasurePM {
    padding-top: 50px;
  }
}
</style>
