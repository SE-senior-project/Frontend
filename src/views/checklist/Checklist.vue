<template>
  Hi checklist
  <ul>
    <li v-for="x in GStore.allCheckList" :key="x.id" @click="selectTask(x)">
      {{ x.checklist_name }}
    </li>
  </ul>
  <br />
  What ur select
  <ul>
    <li v-for="y in GStore.selectTask" :key="y.id" @click="selectInTask(y)">
     <b>{{ y.checklist_name }}</b> 
    </li>
  </ul>
</template>

<script>
import Service from "../../services/OneMeasureService";
export default {
  inject: ["GStore"],
  mounted() {
    console.log(
      "Now is checklist and in project" + this.GStore.current_project
    );
  },
  methods: {
    selectTask(task) {
      console.log("current_project:" + this.GStore.current_project);
      console.log("checklist_id:" + task.checklist_id);
      Service.select_task(task.checklist_id, this.GStore.current_project);
      this.$router.go();
    },
    selectInTask(selectedTask) {
      console.log(
        "select task which checklist_id:" + selectedTask.checklist_id
      );
      this.$router.push({
        name: "list",
        params: { id: selectedTask.checklist_id },
      });
    },
  },
};
</script>

<style>
</style>