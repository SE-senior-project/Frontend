<template>
  <div class="relative flex justify-center items-center">
    <div
      class="bg-white shadow-xl rounded-lg lg:w-[1028px] lg:my-0 my-3 mb-4 mx-8 px-5 pt-5 pb-[50px]"
    >
      <div class="w-max">
        <Form @submit="onSubmit" :validation-schema="schema">
          <FormWrapper label="สร้างโปรเจค">
            <div class="flex flex-col lg:flex-row">
              <div class="w-[400px] mx-4">
                <TextField
                  type="text"
                  name="project_name"
                  placeholder="ชื่อโปรเจค"
                  label="ชื่อโปรเจค"
                  required
                />
                <TextArea
                  type="text"
                  name="project_description"
                  placeholder="รายละเอียดโปรเจค"
                  label="รายละเอียดโปรเจค"
                  rows="10"
                  required
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
import Swal from "sweetalert2";
import Service from "@/services/OneMeasureService.js";
export default {
  name: "create_project",
  inject: ["GStore"],
  components: {
    Form,
    TextField,
    FormWrapper,
    PrimaryButton,
    TextArea,
  },
  data() {
    const schema = yup.object().shape({
      project_name: yup.string().required("กรุณาระบุชื่อโปรเจค"),
      customer_name: yup.string().required("กรุณาระบุชื่อลูกค้า"),
      project_description: yup.string().required("กรุณาระบุรายระเอียดโปรเจค"),
      deadline: yup.string().required("กรุณาเลือกวันกำหนดส่งงาน"),
    });
    return {
      schema,
      id: this.GStore.currentUser.user_id,
    };
  },
  methods: {
    onSubmit(project) {
      Service.add_project(
        project.project_name,
        project.customer_name,
        project.project_description,
        project.deadline,
        1,
        this.id
      ).catch(() => {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      });
      Swal.fire({
        icon: "success",
        title: "สร้างโปรเจคสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        this.$router.push({
          name: "project",
        });
      });
    },
  },
};
</script>

<style scoped></style>
