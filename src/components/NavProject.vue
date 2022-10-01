<template>
  <div class="header float-left">
    <a :href="'../project'">โปรเจค</a>
    | <a :href="'../total_material_selection'">ราคารวมวัสดุทั้งหมด</a> |
    <a :href="'../boq_template'">การสร้าง BOQ</a> |
    <a :href="'/checklist'">การประเมินงาน</a>
  </div>
</template>

<script>
export default {
  name: "nav_project",
};
</script>
<style scoped></style>
