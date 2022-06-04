<template>
  <div class="relative flex justify-center items-center my-10 md:my-[150px] w-full h-full px-5 py-25">
    <div class="max-w-5xl flex flex-col md:flex-row justify-center items-center bg-white shadow-xl rounded-lg mb-4">
      <div class="w-full md:w-[390px]">
        <img class="w-full" src="../../../src/assets/LogoOnemeasure.png" />
      </div>
      <div class="w-max">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
        >
          <FormWrapper label="ล็อคอิน">
            <div class="flex flex-col w-[280px]">
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
            </div>
            <div class="flex flex-row pb-4 text-sm">
              <p>ลงทะเบียนเข้าใช้เว็บไซต์</p>
              <a class="text-blue-500 px-1 cursor-pointer underline underline-offset-1" href="register">ลงทะเบียน</a>
            </div>
            <PrimaryButton>ลงชื่อเข้าใข้</PrimaryButton>
          </FormWrapper>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import PrimaryButton from "@/components/button/PrimaryButton";
import FormWrapper from "@/components/form/FormWrapper";
import AuthService from "@/services/AuthService.js";
import * as yup from "yup";
export default {
  name: "OMlogin",
  components: {
    Form,
    TextField,
    PrimaryButton,
    FormWrapper,
  },
  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('กรุณาระบุอีเมล')
        .email("กรอกรูปแบบอีเมลไม่ถูกต้อง"),
      password: yup.string()
        .required('กรุณาระบุรหัสผ่าน')
        .min(1, "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร"),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(user) {
       AuthService.login(user)
        .then(() => {
          this.$router.go({
            name: "Home",
          });
        })
        .catch(() => {
          this.message = "Cannot login to the system.";
        });
    },
  },
};
</script>

<style scoped>
.btnSubmit {
  border: 1px solid rgba(100, 97, 97, 0.436);
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100vh;
}

</style>
