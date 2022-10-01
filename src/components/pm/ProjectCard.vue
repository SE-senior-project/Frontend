<template>
  <div
    class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg"
    v-if="active_project.project_id != null"
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
    >
      <span>{{ active_project.project_name }}</span>
      <div>
        <div
          @click="onHide"
          v-if="toggle"
          class="
            absolute
            top-0
            right-0
            nav-links
            flex
            list-none
            bg-orange-400
            h-max
            w-[150px]
            px-5
            py-3
            mt-9
            mr-2
            rounded-lg
          "
        >
          <li><span class="text-sm cursor-pointer">ซ่อนโปรเจค</span></li>
        </div>
        <div class="absolute top-0 right-0 px-2 pt-1">
          <img
            @click="toggle = !toggle"
            v-if="!toggle"
            class="h-[25px] pl-[15px] p-[5px]"
            src="../../assets/navbar.png"
          />
          <img
            @click="toggle = !toggle"
            v-if="toggle"
            class="h-[25px] pl-[15px] p-[5px]"
            src="../../assets/x.png"
          />
        </div>
      </div>
    </div>
    <div @click="onSubmit(active_project.project_id)">
      <div class="text-sm font-bold w-5/6 m-auto mb-[20px]">
        <span>ชื่อ: {{ active_project.customer_name }}</span>
      </div>
      <hr />
      <div class="text-sm px-[20px] pb-[50px]">
        {{ active_project.project_description }}
      </div>
      <hr />
      <div class="text-sm px-[20px] pb-[20px] flex flex-row float-right">
        <p class="text-sm font-bold">กำหนดการส่ง:</p>
        <p class="px-[10px]">{{ active_project.deadline }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import Service from "@/services/OneMeasureService.js";
export default {
  inject: ["GStore"],
  name: "OMPM",
  props: {
    active_project: {
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
      Swal.fire({
        title: "คุณต้องการเลือกโปรเจคนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem(
            "project_id",
            JSON.stringify(parseInt(this.active_project.project_id))
          );
          console.log("Sometime not show the current project" + this.GStore.current_project);
          console.log(typeof this.GStore.current_project);
          this.$router.push({
            name: "material_list"
          });
        }
      });
    },
    onHide() {
      Swal.fire({
        title: "คุณต้องการที่จะซ่อนโปรเจคนี้นี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.active_status_project(0, this.active_project.project_id);
          this.$router.go();
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
