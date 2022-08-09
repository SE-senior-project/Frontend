<template>
  <div class="relative flex justify-center items-center">
    <!-- {{GStore.currentMaterial}} -->
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
      <br />
      <FormWrapper label="BOQ" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BOQCard v-for="x in GStore.currentBOQ" :key="x.id" :boq="x" />
      </div>
      <router-link :to="{ name: 'create_boq' }">
        <PrimaryButton class="float-right mb-[20px]">สร้าง BOQ</PrimaryButton>
      </router-link>
      <br />
      <FormWrapper label="ลูกค้า" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BOQCard v-for="x in GStore.currentBOQ" :key="x.id" :boq="x" />
      </div>
    </div>
  </div>
</template>

<script>
import NavProject from "../../components/NavProject";
import BOQCard from "../../components/boq/BOQCard.vue";
import BOQViewCard from "../../components/boq/BOQViewCard.vue";
// import Service from "@/services/OneMeasureService";
// import Swal from "sweetalert2";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
export default {
  inject: ["GStore"],
  name: "boq_generation",
  components: {
    BOQCard,
    BOQViewCard,
    NavProject,
    FormWrapper,
    PrimaryButton,
  },
  data() {
    return {
      boq: null,
    };
  },
  mounted() {
    console.log(
      "current project in BOQ template" + this.GStore.current_project
    );
  },
};
</script>

<style scoped></style>
