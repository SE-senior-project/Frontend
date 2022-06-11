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
      <FormWrapper label="โปรเจค" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="x in users" :key="x.id" :user="x" />
      </div>
      <router-link :to="{ name: 'create_project' }">
        <PrimaryButton class="float-right mb-[20px]">สร้างโปรเจคใหม่</PrimaryButton>
      </router-link>
      <FormWrapper class="clear-both flex flex-row" label="โปรเจคที่ซ่อนไว้">
        <img @click='toggle = !toggle' v-if="!toggle" class="h-[25px] pl-[15px] p-[5px]" src="../../assets/right-arrow.png" />
        <img @click='toggle = !toggle' v-if='toggle' class="h-[27px] pl-[15px] p-[5px]" src="../../assets/down-arrow.png" />
      </FormWrapper>
      <div v-if='toggle' class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <UnhideProjectCard v-for="x in users" :key="x.id" :user="x" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../../components/pm/ProjectCard.vue";
import UnhideProjectCard from "../../components/pm/UnhideProjectCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
export default {
  name: "OMprojectmanagement",
  components: {
    ProjectCard,
    FormWrapper,
    PrimaryButton,
    UnhideProjectCard
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

</style>
