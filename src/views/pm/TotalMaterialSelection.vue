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
        flex flex-col
      "
    >
      <NavProject />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-[40px]">
        <div class="bg-orange-500">
          <FormWrapper class="px-8 pt-6 pb-2 mb-0 text-white" label="วัสดุ" />
          <div
            class="
              bg-gray-100
              shadow-lg
              px-10
              py-5
              overflow-y-scroll
              max-h-screen
            "
          >
            <div class="grid grid-cols-1">
              <TotalMaterialCard v-for="x in material_selection" :key="x.id" :material_selection="x" />
            </div>
          </div>
        </div>
        <div class="px-6 pt-6 mt-14">
          <div class="grid grid-cols-1">
            <TotalMaterialPriceCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormWrapper from "@/components/form/FormWrapper";
import TotalMaterialCard from "@/components/pm/TotalMaterialCard";
import TotalMaterialPriceCard from "@/components/pm/TotalMaterialPriceCard";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import NavProject from "../../components/NavProject";
import Service from "@/services/OneMeasureService";
export default {
  name: "total_material_selection",
  inject: ["GStore"],
  components: {
    FormWrapper,
    TotalMaterialCard,
    TotalMaterialPriceCard,
    PrimaryButton,
    SecondaryButton,
    NavProject,
  },
  data() {
    return {
      num: 0,
      // users: [
      //   {
      //     name: "thitisan",
      //     id: 1,
      //   },
      //   {
      //     name: "Phonmongkhon",
      //     id: 2,
      //   },
      //   {
      //     name: "Pasakon",
      //     id: 3,
      //   },
      //   {
      //     name: "Sahachan",
      //     id: 4,
      //   },
      //   {
      //     name: "Khemata",
      //     id: 5,
      //   },
      // ],
      material_selection: null
    };
  },
   created() {
    Service.get_all_total_material_selection(this.GStore.current_project)
      .then((response) => {
        this.material_selection = response.data;
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        })
      })
      
  },
};
</script>

<style scoped>
</style>
