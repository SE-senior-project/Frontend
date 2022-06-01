<template>
  <div class="mx-2 flex justify-center pb-8">
    <div class="align-items-start mt-4 w-full max-w-[640px]">
      <Form
        class="flex flex-col gap-y-4"
        @submit="onSubmit"
        :validation-schema="schema"
      >
      <FormWrapper label="ข้อมูลส่วนตัว">
        <div class="flex flex-col gap-x-2 md:flex-row">
          <TextField
            type="text"
            name="firstname"
            placeholder="ชื่อ"
            label="ชื่อ"
            required
          />
          <TextField
            type="text"
            name="lastname"
            placeholder="นามสกุล"
            label="นามสกุล"
            required
          />
        </div>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </FormWrapper>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import PrimaryButton from "@/components/button/PrimaryButton";
import FormWrapper from '@/components/form/FormWrapper'
import * as yup from "yup";

export default {
  name: "form",
  components: {
    Form,
    TextField,
    PrimaryButton,
    FormWrapper,
  },

  data() {
    const schema = yup.object().shape({
      firstname: yup
        .string()
        .required("กรุณาระบุชื่อจริง")
        .matches(/^[ก-๙]{1,}$/, "กรุณาระบุชื่อจริงเป็นภาษาไทย"),
      lastname: yup
        .string()
        .required("กรุณาระบุนามสกุล")
        .matches(/^[ก-๙]{1,}$/, "กรุณาระบุชื่อจริงเป็นภาษาไทย"),
    });
    return {
      schema,
    };
  },
  onSubmit() {
    this.$router.push({ name: "showcase" });
  },
};
</script>
