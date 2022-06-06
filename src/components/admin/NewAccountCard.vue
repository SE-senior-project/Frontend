<template>
  <div class="mx-[60px] lg:mx-[40px] mb-10 shadow-xl rounded-lg">
    <div
      class="
        contractor
        text-white
        relative
        mb-[20px]
        text-lg
        text-center
        py-[50px]
        bg-orange-500
      "
    >
      <span>ผู้รับเหมาคนที่ {{ user.id }}</span>
    </div>
    <div class="text-base w-5/6 m-auto mb-[20px] py-[8px]">
      <span>ชื่อ: {{ user.name }}</span>
    </div>
    <div class="flex space-x-4 my-8 mx-5">
      <PrimaryButton>อนุมัติ</PrimaryButton>
    <SecondaryButton>ไม่อนุมัติ</SecondaryButton>
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
export default {
  name: "contractor_card",
  components: {
    PrimaryButton,
    SecondaryButton
  },
  props: {
    user: {
      type: Object,
      required: true,
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
