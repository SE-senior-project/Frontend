<template>
  <div class="relative flex justify-center items-center">
    <div
      class="
        bg-white
        shadow-xl
        rounded-lg
        lg:w-[1028px] lg:my-0
        my-3
        mb-4
        mx-8
        px-5
        pt-5
        pb-[50px]
      "
    >
      <div class="w-max">
        <Form @submit="onSubmit" :validation-schema="schema">
          <FormWrapper label="สร้างโปรเจค">
            <div class="flex flex-col lg:flex-row">
              <div class="w-[400px] mx-4">
                <TextField
                  type="text"
                  name="email"
                  placeholder="อีเมลลูกค้า"
                  label="อีเมลลูกค้า"
                  required
                />
                <TextArea
                  type="text"
                  name="project_description"
                  placeholder="รายละเอียดโปรเจค"
                  label="รายละเอียดโปรเจค"
                  rows="10"
                />
              </div>
              <div class="w-[400px] mx-4">
                <TextField
                  type="text"
                  name="customer_name"
                  placeholder="ชื่อลูกค้า"
                  label="ชื่อลูกค้า"
                  required
                />
                <TextField
                  type="date"
                  name="deadline"
                  label="วันกำหนดส่งงาน"
                  required
                />
              </div>
            </div>
            <PrimaryButton>สร้างโปรเจค</PrimaryButton>
          </FormWrapper>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import TextArea from "@/components/field/TextArea";
import * as yup from "yup";
export default {
  name: "create_project",
  //   inject: ["GStore"],
  components: {
    Form,
    TextField,
    FormWrapper,
    PrimaryButton,
    TextArea,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("กรุณาระบุอีเมล")
        .email("กรอกรูปแบบอีเมลไม่ถูกต้อง"),
      customer_name: yup
        .string()
        .required("กรุณาระบุชื่อลูกค้า")
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "project",
      });
    },
  },
};
</script>

<style scoped>
</style>
