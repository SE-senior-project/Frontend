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
            <BOQCard v-for="x in GStore.currentBOQ " :key="x.id" :boq="x" />
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
      <BOQViewCard v-for="x in GStore.currentCustomerView" :key="x.id" :customer="x" />
    </div>
  </div>
</template>
<script>
import BOQCard from "../../components/boq/BOQCard.vue";
import BOQViewCard from "../../components/boq/BOQViewCard.vue";
import Service from "@/services/OneMeasureService";
import Swal from "sweetalert2";
export default {
  inject: ["GStore"],
  name: "boq_generation",
  components: {
    BOQCard,
    BOQViewCard,
  },
  data() {
    return {
      boq: null,
    };
  },
  created() {
    Service.get_BOQ()
      .then((response) => {
        this.boq = response.data;
        console.log(this.boq);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  },
};
</script>

<style scoped></style>
