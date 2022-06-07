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
      <span>ผู้รับเหมาคนที่ {{ user.contractor_id }}</span>
    </div>
    <div class="text-base w-5/6 m-auto mb-[20px] py-[8px]">
      <span>ชื่อ: {{ user.first_name }} {{ user.last_name }}</span>
    </div>

    <PrimaryButton
      class="relative m-auto my-8"
      v-on:click="disable_contractor(user.contractor_id)"
      >{{ label }}</PrimaryButton
    >
  </div>
</template>
<script>
import PrimaryButton from "@/components/button/PrimaryButton";
import Service from "../../services/OneMeasureService.js";
import Swal from "sweetalert2";
export default {
  name: "contractor_card",
  components: {
    PrimaryButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    disable_contractor(id) {
      Swal.fire({
        title: "คุณต้องการที่จะปิดใช้งานสมาชิกนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ปิดการใช้งาน",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.disable_contractor(id);
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
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
