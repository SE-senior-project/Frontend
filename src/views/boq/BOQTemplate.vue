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
   
      <PrimaryButton @click="generate()" class="float-right mb-[20px]"
        >สร้าง BOQ</PrimaryButton
      >
      <br />
      <FormWrapper label="ลูกค้า" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BOQCustomerCard v-for="x in GStore.currentBOQ" :key="x.id" :boq="x" />
      </div>
    </div>
  </div>
</template>

<script>
import NavProject from "../../components/NavProject";
import BOQCard from "../../components/boq/BOQCard.vue";
import BOQCustomerCard from "../../components/boq/BOQCustomerCard.vue";
import BOQViewCard from "../../components/boq/BOQViewCard.vue";
import Service from "@/services/OneMeasureService";
// import Swal from "sweetalert2";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
export default {
  inject: ["GStore"],
  name: "boq_generation",
  components: {
    BOQCard,
    BOQCustomerCard,
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
    // console.log(Object.keys(this.GStore.currentBOQ).length);
    console.log(
      "current project in BOQ template" + this.GStore.current_project
    );
  },
  methods: {
    generate() {
      // let id = parseInt(Object.keys(this.GStore.currentBOQ).length+1);
      // console.log('id generate in BOQ template'+id);
      Service.generateBOQ(0, parseInt(this.GStore.current_project)).then(
        (response) => {
          this.GStore.currentLastBOQId = response.data;
          this.last_id = this.GStore.currentLastBOQId.last_id;
          console.log("new id " + this.last_id);
          this.$router.push({ name: "boq_gen", params: { id: this.last_id } });
          // console.log(this.GStore.currentLastBOQId.last_id), params: { id: this.last_id }
        }
      );
    },
  },
};
</script>

<style scoped></style>
