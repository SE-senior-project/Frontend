<template>
  <div class="card h-fit mx-[60px] md:mx-[40px] lg:mx-[20px] rounded-[5px] mb-[2px] w-max">
    <div class="flex flex-row h-auto pl-[10px] py-[5px] w-[300px] rounded-[5px] border-solid border-[2px] border-orange-400">
        <div class="w-full">
            <p class="pt-[2px] pl-[10px] pr-[40px] w-full text-lg font-sans font-bold break-words">{{ checklist.checklist_name }}</p>
        </div>
    </div>
  </div>
</template>
<script>
import Service from "../../services/OneMeasureService";

export default {
  name: "checklist_card",
  props: {
    checklist: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectTask(task) {
      console.log("current_project:" + this.GStore.current_project);
      console.log("checklist_id:" + task.checklist_id);
      Service.select_task(task.checklist_id, this.GStore.current_project);
      this.$router.go();
    },
  }
};
</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
  background-color: #f2f2f2;
}
</style>
