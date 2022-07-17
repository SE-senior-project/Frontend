<template>
  <div
    class="
      relative
      flex
      justify-center
      items-center
      my-10
      md:my-[150px]
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
        md:flex-row
        justify-center
        items-center
        bg-white
        shadow-xl
        rounded-lg
        mb-4
      "
    >
      <div class="w-full md:w-[390px]">
        <img class="w-full" src="../../../src/assets/LogoOnemeasure.png" />
      </div>
      <div class="w-max">
        <Form @submit="login" :validation-schema="schema">
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
              <a
                class="
                  text-blue-500
                  px-1
                  cursor-pointer
                  underline underline-offset-1
                "
                href="register"
                >ลงทะเบียน</a
              >
            </div>
            <PrimaryButton>ลงชื่อเข้าใช้</PrimaryButton>
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
import Swal from "sweetalert2";
export default {
  inject: ["GStore"],
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
        .required("กรุณาระบุอีเมล")
        .email("กรอกรูปแบบอีเมลไม่ถูกต้อง"),
      password: yup
        .string()
        .required("กรุณาระบุรหัสผ่าน")
        .min(7, "รหัสผ่านต้องมีความยาวไม่น้อยกว่า 8 ตัวอักษร"),
    });
    return {
      schema,
    };
  },
  methods: {
    login(user) {
      AuthService.login(user).then(() => {
        // if (this.GStore.currentUser_fail == false) {
        //   Swal.fire({
        //         icon: "error",
        //         title: "โปรดลองอีกครั้งภายหลัง",
        //         showConfirmButton: false,
        //         timer: 2000,
        //       }).then(() => {
        //         this.$router.go();
        //       });
        // } else {
        if (
          this.GStore.currentUser.role == "contractor" &&
          this.GStore.currentUser.status == 1 &&
          this.GStore.currentUser.active == 1
        ) {
          this.$router.push({
            name: "project",
          });
        }
        if (
          this.GStore.currentUser.role == "contractor" &&
          this.GStore.currentUser.status == 1 &&
          this.GStore.currentUser.active == 0
        ) {
          this.$router.push({
            name: "home",
          });
        }
        if (
          this.GStore.currentUser.role == "contractor" &&
          this.GStore.currentUser.status == 0
        ) {
          this.$router.push({
            name: "home",
          });
        }
        if (this.GStore.currentUser.role == "admin") {
          this.$router.push({
            name: "admin",
          });
        }
        // }
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
