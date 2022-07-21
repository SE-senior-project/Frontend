<template>
  <!-- list -->
  <div class="container"></div>
  <!-- BOQ Table -->
  <br />
  <table class="center">
    <tr id="header">
      <th>ลำดับ</th>
      <td>รายการ</td>
      <td>พื้นที่</td>
      <td>หน่วย</td>
      <td>ค่าวัสดุต่อหน่วย</td>
      <td>ราคาวัสดุรวม</td>
      <td>ค่าแรงต่อหน่วย</td>
      <td>ค่าแรงรวม</td>
      <td>ยอดรวม</td>
    </tr>
    <tr v-for="(list, index) in GStore.CurrentBOQUSE" :key="list.id">
      <th>{{ index + 1 }}</th>
      <td>{{ list.list_name }}</td>
      <td>{{ list.total_quantity }}</td>
      <td>{{ list.unit }}</td>
      <td>{{ list.cost_of_materials_per_unit }}</td>
      <td>{{ list.total_cost_materials }}</td>
      <td>{{ list.cost_of_wage_per_unit }}</td>
      <td>{{ list.total_wages }}</td>
      <td>{{ list.total_price }}</td>
    </tr>
  </table>
  <br />
  <div class="opertaion-center">
    ยอดรวมทั้งหมด:{{ GStore.CurrentTotalBOQlist }}
  </div>
  <br />

  <div class="container">
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_template' }"> Back </router-link>
    </button>
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_generation'}">
        Use as template
      </router-link>
    </button>
  </div>
  <!-- Price Tread pf material -->
  <div class="container"></div>
</template>
<script>
export default {
  inject: ["GStore"],
  name: "boq_confirmation",
};
</script>

<style scoped>
.opertaion-center {
  text-align: center;
}
#header {
  -webkit-text-stroke: 1px black;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(odd) {
  background-color: #dddddda2;
}
</style>
