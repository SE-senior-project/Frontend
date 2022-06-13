<template>
  <div class="relative flex justify-center items-center">
    <div
      class="
        relative
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
      <div class="recommend mb-10">
        <FormWrapper label="ประเภทของวัสดุ" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <MaterialSelectionCard v-for="x in GStore.currentMaterialType" :key="x.id" :alltype="x" />
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
import FormWrapper from "@/components/form/FormWrapper";
import MaterialSelectionCard from "../../components/pm/MaterialSelectionCard.vue";
import SearchMaterial from "../../components/pm/SearchMaterial.vue";
import NavProject from "../../components/NavProject";
import Pagination from "../../components/Pagination";
export default {
  inject: ["GStore"],
  name: "material_selection",
  components: {
    FormWrapper,
    MaterialSelectionCard,
    SearchMaterial,
    NavProject,
    Pagination,
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

ul {
  border-left: 1px solid #737373;
  border-radius: 2px;
}

span:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
