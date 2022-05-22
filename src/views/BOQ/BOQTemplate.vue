<template>
  <div class="contractor">
    <a :href="'project'">Project</a>
    | <a :href="'boq_generation'">BOQ Generation</a> |
    <a :href="''">Project Schedule</a>
    | <a :href="''">Check list</a>
  </div>
  <div class="container">
    <div class="updateForm">
      <br />
      <h2>BOQ Generation</h2>
      <form>
        <br />
        <div class="form-group inputform">
          <input class="form-control" type="search" />
        </div>
        <br />
        <button type="submit" class="btn btn-light btnSubmit">
          Search <font-awesome-icon icon="sign-in-alt" id="icon" />
        </button>
        <div>
          <div class="contractor">
            <BOQCard v-for="x in users" :key="x.id" :user="x" />
          </div>
        </div>
        <div class="form-group Search"></div>
      </form>
    </div>
    <div class="container">
      <button type="submit" class="btn btn-light btnSubmit">Create BOQ</button>
    </div>
  </div>
  <br />
  <div>
    <h5>Custermer views</h5>
    <div class="contractor">
      <BOQViewCard v-for="x in users" :key="x.id" :user="x" />
    </div>
  </div>
</template>
<script>
import BOQCard from "../../components/BOQ_components/BOQCard.vue";
import BOQViewCard from "../../components/BOQ_components/BOQViewCard.vue";
export default {
  name: "boq_generation",
  components: {
    BOQCard,
    BOQViewCard,
  },
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
};
</script>

<style scoped></style>
