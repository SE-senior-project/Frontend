<template>
 <div class="relative flex justify-center items-center">
    <!-- {{GStore.currentMaterial}} -->
    <div
      class="
        max-w-5xl
        bg-white
        shadow-xl
        rounded-lg
        w-[1028px]
        mb-4
        mx-8
        px-10
        py-5
      "
    >
      <NavProject />
      <br />
      <div class="flex">
      <div class="flex-auto w-[350px]">
        <FormWrapper label="หัวข้อที่ต้องเช็ค" />
        <ChecklistCard @click="selectTask(x)" v-for="x in GStore.allCheckList" :key="x.id" :checklist="x"/>
      </div>
      <br />
      <div class="flex-auto">
        <FormWrapper label="งานที่เลือก" />
        <TaskCard v-for="y in GStore.selectTask" :key="y.id" :task="y"  />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../services/OneMeasureService";
import ChecklistCard from "../../components/checklist/ChecklistCard.vue";
import TaskCard from "../../components/checklist/TaskCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import NavProject from "../../components/NavProject";
import PrimaryButton from "@/components/button/PrimaryButton";
import Swal from "sweetalert2";
export default {
  components: {
    ChecklistCard,
    FormWrapper,
    NavProject,
    PrimaryButton,
    TaskCard
  },
  inject: ["GStore"],
  mounted() {
    console.log(this.GStore.selectTask);
    console.log(
      "Now is checklist and in project" + this.GStore.current_project
    );
  },
  methods: {
    selectTask(task) {
      Swal.fire({
        title: "คุณต้องการเลือกหัวข้อนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("current_project:" + this.GStore.current_project);
          console.log("checklist_id:" + task.checklist_id);
          Service.select_task(task.checklist_id, this.GStore.current_project);
          this.$router.go();
        }
      })
    },
  },
};
</script>

<style>
</style>