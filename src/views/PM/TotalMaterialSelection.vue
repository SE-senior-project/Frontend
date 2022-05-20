<template>
  <div class="wrapper">
    <ul class="my-row">
      <li><div class="OnemeasurePM">Total Price</div></li>
      <li></li>
      <li></li>
    </ul>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6">
          <TotalPriceCard
            v-for="x in material_lists"
            :key="x.id"
            :material_list="x"
          />
        </div>
        <div class="col-6">
          <br />
          <div class="card">
            <div class="card-body">TotalPrice: {{ num }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TotalPriceCard from "../../components/TotalPriceCard.vue";
export default {
  name: "total_material_selection",
  components: {
    TotalPriceCard,
  },
  data() {
    return {
      num: 0,
      material_lists: [
        {
          name: "thitisan",
          id: 1,
          price: 1200,
        },
        {
          name: "Phonmongkhon",
          id: 2,
          price: 1200,
        },
        {
          name: "Pasakon",
          id: 3,
          price: 1200,
        },
        {
          name: "Sahachan",
          id: 4,
          price: 1200,
        },
        {
          name: "Khemata",
          id: 5,
          price: 900000,
        },
      ],
    };
  },
  mounted() {
    let sum = 0;
    for (let index = 0; index < this.material_lists.length; index++) {
      console.log(this.material_lists[index].price);
      sum = sum + this.material_lists[index].price;
    }
    this.num = sum;
  },
  methods: {
 
  },
  computed: {
    calculate_price() {
      let sum = 0;
      for (let index = 0; index < this.material_lists.length; index++) {
        console.log(this.material_lists[index].price);
        sum = sum + this.material_lists[index].price;
      }
      this.num = sum;
      return num;
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 50px;
}
.card {
  padding-top: 20px;
  padding: 50px;
}
</style>
