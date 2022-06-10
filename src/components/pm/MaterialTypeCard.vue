<template>
  <div
    class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg"
  >
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
    ></div>
    <div class="text-sm px-[20px] pb-[60px]">
      <p class="font-bold">ชื่อวัสดุ: {{ user.name }}</p>
      <p class="font-bold">ราคา: {{ user.id }}</p>
      <SecondaryButton @click="onSubmit" class="float-right my-5">เพิ่มวัสดุ</SecondaryButton>
    </div>
  </div>
</template>
<script>
import SecondaryButton from "@/components/button/SecondaryButton";
export default {
  name: "material_type_card",
  components: {
    SecondaryButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "total_material_selection",
      });
    },
  },
};
</script>

<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #edeff2;
  margin: 1em 0;
  padding: 0;
}

.card:hover {
  transform: scale(1.05);
}

.nav-links::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  background-color: #fa903d;
  right: 9px;
  top: -4px;
  transform: rotate(45deg);
}
</style>
