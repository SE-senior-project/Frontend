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
      <div class="header float-left">
        <a :href="'../project'">โปรเจค</a>
        | <a :href="'../boq_generation'">การสร้าง BOQ</a> |
        <a :href="''">ตารางงานโปรเจค</a> | <a :href="''">การประเมินงาน</a>
      </div>
      <div class="clear-both w-max flex flex-row mt-[40px]">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div class="grid grid-cols-2">
            <div class="w-[400px] mx-4">
              <TextField type="text" name="search" placeholder="ค้นหาวัสดุ" />
            </div>
            <div class="my-[9px]">
              <SecondaryButton>ค้นหา</SecondaryButton>
            </div>
          </div>
        </Form>
      </div>
      <div class="w-[500px]">
        <ul class="px-10 py-5 ml-10 rounded-md">
          <CategoryMaterial v-for="x in users" :key="x.id" :user="x" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import FormWrapper from "@/components/form/FormWrapper";
import SecondaryButton from "@/components/button/SecondaryButton";
import RecommendMaterial from "../../components/pm/RecommendMaterial.vue";
import CategoryMaterial from "../../components/pm/CategoryMaterial.vue";
export default {
  name: "material_list",
  components: {
    Form,
    TextField,
    FormWrapper,
    SecondaryButton,
    RecommendMaterial,
    CategoryMaterial,
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
