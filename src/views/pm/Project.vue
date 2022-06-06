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
        <ProjectCard v-for="x in users" :key="x.id" :user="x" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../../components/pm/ProjectCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
export default {
  name: "OMprojectmanagement",
  components: {
    ProjectCard,
    FormWrapper,
    PrimaryButton
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
li {
  text-decoration: none;
  position: relative;
}
ul.my-row {
  display: table;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  position: relative;
}

ul.my-row > li {
  display: table-cell;
}
#createnewbutt {
  text-decoration: none;
  color: black;
}
.buttonPM {
  text-align: right;
  padding-right: 50px;
}
.btnSubmit {
  color: #282726;
  background-color: #fff;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
}
.btnSubmit:hover {
  box-shadow: 0 5px 8px 0 rgba(245, 103, 1, 0.2),
    0 9px 26px 0 rgba(245, 103, 1, 0.19);
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}

.OnemeasurePM {
  margin: 0 auto;
  height: 50px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: left;
  padding-left: 50px;
}
@media screen and (max-width: 800px) {
  .OnemeasurePM {
    padding-top: 50px;
  }
}
</style>
