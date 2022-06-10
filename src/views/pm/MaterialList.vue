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
      <NavProject />
      <SearchMaterial />
      <div class="w-[500px]">
        <ul class="px-10 py-5 ml-10 rounded-md">
          <CategoryMaterial v-for="x in users" :key="x.id" :user="x" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryMaterial from "../../components/pm/CategoryMaterial.vue";
import SearchMaterial from "../../components/pm/SearchMaterial.vue";
import NavProject from "../../components/NavProject";
export default {
  name: "material_list",
  components: {
    CategoryMaterial,
    SearchMaterial,
    NavProject,
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
      toggle: false,
    };
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
