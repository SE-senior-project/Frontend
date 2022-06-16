<template>
  <div
    class="
      relative
      flex
      justify-center
      items-center
      my-10
      xl:my-[150px]
      w-full
      h-full
      px-5
      py-25
    "
  >
    <div
      class="
        max-w-5xl
        flex flex-col
        xl:flex-row
        justify-center
        items-center
        bg-white
        shadow-xl
        rounded-lg
        mb-4
      "
    >
      <div class="w-full xl:w-[800px]">
        <img class="w-full" src="../../../src/assets/LogoOnemeasure.png" />
      </div>
      <div class="w-max">
        <Form @submit="register" :validation-schema="schema">
          <FormWrapper label="สมัครสมาชิก">
            <div class="flex flex-col w-[300px]">
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
              <TextField
                type="text"
                name="email"
                placeholder="อีเมล"
                label="อีเมล"
                required
              />
              <TextField
                type="password"
                name="password"
                placeholder="รหัสผ่าน"
                label="รหัสผ่าน"
                required
              />
              <TextField
                type="password"
                name="confirm_password"
                placeholder="รหัสผ่าน"
                label="ยืนยันรหัสผ่าน"
                required
              />
            </div>
            <PrimaryButton>สมัครสมาชิก</PrimaryButton>
          </FormWrapper>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../services/OneMeasureService.js";
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import PrimaryButton from "@/components/button/PrimaryButton";
import FormWrapper from "@/components/form/FormWrapper";
import Swal from "sweetalert2";
import * as yup from "yup";
export default {
  name: "OMregister",
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
        .required("กรุณาระบุชื่อ")
        .matches(/^[ก-๙]{1,}$/, "กรุณาระบุเป็นภาษาไทย"),
      lastname: yup
        .string()
        .required("กรุณาระบุนามสกุล")
        .matches(/^[ก-๙]{1,}$/, "กรุณาระบุเป็นภาษาไทย"),
      email: yup
        .string()
        .required("กรุณาระบุอีเมล")
        .email("กรอกรูปแบบอีเมลไม่ถูกต้อง"),
      password: yup
        .string()
        .required("กรุณาระบุรหัสผ่าน")
        .min(8, "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร"),
      confirm_password: yup
        .string()
        .required("กรุณาระบุรหัสผ่าน")
        .min(8, "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร")
        .oneOf([yup.ref("password"), null], "รหัสผ่านไม่ตรงกัน"),
    });
    return {
      schema,
    };
  },
  methods: {
    register(user) {
      Service.register(user)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "ลงทะเบียนสำเร็จ",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push({
            name: "login",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            this.$router.go();
          });
        });
    },
  },
};
</script>

<style scoped>
.btnSubmit {
  border: 1px solid rgba(100, 97, 97, 0.436);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
}
</style>
