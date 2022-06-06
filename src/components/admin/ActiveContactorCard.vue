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
    <PrimaryButton class="relative m-auto my-8">{{ label }}</PrimaryButton>
  </div>
</template>
<script>
import PrimaryButton from "@/components/button/PrimaryButton";
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
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
