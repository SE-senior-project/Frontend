<template>
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
</template>

<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import SecondaryButton from "@/components/button/SecondaryButton";
export default {
  name: "search_material",
  components: {
    Form,
    TextField,
    SecondaryButton,
  },
};
</script>
<style scoped>
</style>
