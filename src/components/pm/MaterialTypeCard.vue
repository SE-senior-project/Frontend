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
      <p class="font-bold">ชื่อวัสดุ: {{ materialtype.material_name }}</p>
      <p class="font-bold">ราคา: {{ materialtype.material_price }}</p>
      <SecondaryButton @click="onSubmit(GStore.current_project)" class="float-right my-5"
        >เพิ่มวัสดุ</SecondaryButton
      >
    </div>
  </div>
</template>
<script>
import SecondaryButton from "@/components/button/SecondaryButton";
import Swal from "sweetalert2";
import Service from "@/services/OneMeasureService.js";
export default {
  name: "material_type_card",
  inject: ["GStore"],
  components: {
    SecondaryButton,
  },
  props: {
    materialtype: {
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
    onSubmit(project_id) {
      Swal.fire({
        title: "คุณต้องการเพิ่มวัสดุนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.add_material(this.materialtype.material_name,parseFloat(this.materialtype.material_price), project_id);
          console.log("added");
        }
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
