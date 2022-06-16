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
        pt-5
        pb-14
      "
    >
      <NavProject />
      <SearchMaterial />

      <input type="text" v-model="input" class="border-color: inherit;" />
      <ul>
        <li v-for="item in filteredList" :key="item.id">
          <p v-if="input">{{ item.material_name }}</p>
        </li>
      </ul>
      <div class="px-10 pt-5 rounded-md grid grid-cols-3">
        <CategoryMaterial v-for="x in category" :key="x.id" :category="x" />
      </div>
      <!-- <Pagination /> -->
    </div>
  </div>
</template>
<script>
import Service from "@/services/OneMeasureService";
import CategoryMaterial from "../../components/pm/CategoryMaterial.vue";
import SearchMaterial from "../../components/pm/SearchMaterial.vue";
import NavProject from "../../components/NavProject";
import Pagination from "../../components/Pagination";
export default {
  inject: ["GStore"],
  name: "material_list",
  components: {
    CategoryMaterial,
    SearchMaterial,
    NavProject,
    Pagination,
  },
  data() {
    return {
      password: "",
      checked: null,
      range: [],
      input: "",
      toggle: false,
      category: null,
    };
  },
  created() {
    Service.get_all_category().then((response) => {
      this.category = response.data;
    });
  },
  computed: {
    filteredList() {
      console.log(this.GStore.currentMaterial);
      let store = this.GStore.currentMaterial;
      return store.filter((e) => e.material_name.toLowerCase().includes(this.input))
    },
    show() {
      console.log(this.range);
    },
  },
};
</script>

<style scoped>
span {
  border: 1px solid black;
  padding: 10px 10px;
  margin: 20px 0;
  border-radius: 10px;
}

span:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
