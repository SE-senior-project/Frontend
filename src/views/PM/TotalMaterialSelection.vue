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
          <figure
            class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
          >
            <img
              class="w-24 h-24 md:w-48 md:rounded-none rounded-full mx-auto pl-5 pt-2"
              src="../../assets/logo.png"
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center space-y-4 text-white">
              <blockquote>
                <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure>
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
