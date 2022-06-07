<template>
  <div class="mx-[60px] lg:mx-[40px] mb-10 shadow-xl rounded-lg">
    <div
      class="
        contractor
        text-white
        relative
        mb-[20px]
        text-lg text-center
        py-[50px]
        bg-orange-500
      "
    >
      <span>ผู้รับเหมาคนที่ {{ user.user_id }}</span>
    </div>
    <div class="text-base w-5/6 m-auto mb-[20px] py-[8px]">
      <span>ชื่อ: {{ user.first_name }} {{ user.last_name }}</span>
    </div>
    <div class="flex space-x-4 my-8 mx-5">
      <PrimaryButton v-on:click="approve_user(user.user_id)"
        >อนุมัติ</PrimaryButton
      >
      <SecondaryButton v-on:click="unapprove_user(user.user_id)"
        >ไม่อนุมัติ</SecondaryButton
      >
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import Service from "../../services/OneMeasureService.js";
import Swal from "sweetalert2";
export default {
  name: "contractor_card",
  components: {
    PrimaryButton,
    SecondaryButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    approve_user(id) {
      Swal.fire({
        title: "คุณต้องการที่จะอนุญาติสมาชิกนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "อนุญาติ",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.approve_user(id);
          Swal.fire({
            icon: "success",
            title: "อัพเดทสำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          }).then((result) => {
            this.$router.go();
          });
        }
      });
    },
    unapprove_user(id) {
      Swal.fire({
        title: "คุณต้องการที่จะไม่อนุญาติสมาชิกนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ไม่อนุญาติ",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.unapprove_user(id);
          Swal.fire({
            icon: "success",
            title: "อัพเดทสำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          }).then((result) => {
            this.$router.go();
          });
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
