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
        flex justify-center items-center flex-col
      "
    >
      <img class="w-[300px]" src="../assets/LogoOnemeasure.png" />
      <p class="my-5 text-lg">กรุณารอเจ้าหน้าที่เว็บไซต์อนุมัติการเข้าใช้เว็บไซต์</p>
      <PrimaryButton @click="onSubmit">ย้อนกลับ</PrimaryButton>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/pm/ProjectCard.vue";
import UnhideProjectCard from "@/components/pm/UnhideProjectCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
export default {
  name: "HomeView",
  inject: ["GStore"],
  components: {
    ProjectCard,
    FormWrapper,
    PrimaryButton,
    UnhideProjectCard,
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
  methods: {
    onSubmit() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.GStore.currentUser = JSON.parse(localStorage.getItem("user"));
      this.$router.push({
        name: "login",
      });
    },

  },
};
</script>
<style scoped>
</style>

