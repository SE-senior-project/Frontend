<template>
  <div class="relative flex justify-center items-center">
    <div
      class="
        max-w-5xl
        bg-white
        shadow-xl
        rounded-lg
        w-[1028px]
        mb-4
        mx-8
        px-10
        py-5
      "
    >
      <div class="header float-left">
        <a :href="'../project'">โปรเจค</a>
        | <a :href="'../boq_generation'">การสร้าง BOQ</a> |
        <a :href="''">ตารางงานโปรเจค</a> | <a :href="''">การประเมินงาน</a>
      </div>
    </div>
  </div>
</template>
<script>
import TotalPriceCard from "../../components/pm/TotalPriceCard.vue";
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
  methods: {},
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
