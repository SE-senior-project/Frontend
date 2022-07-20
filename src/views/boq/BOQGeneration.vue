<template>
  <!-- list -->
  <!-- <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">BOQ Name</label>
        <input
          type="boqGeneration"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <button class="btn btn-primary">Search</button>
      <button class="btn btn-primary">Add</button>
      <button class="btn btn-primary">Edit</button>
    </form>
  </div> -->
  <!-- BOQ Table -->
  <!-- <div class="container">
    <button class="btn btn-primary">
      <router-link :to="{ name: 'boq_confirmation' }"> Submit </router-link>
    </button>
  </div> -->
  <!-- Price Tread pf material -->
  <!-- <div class="container"></div> -->

  <br />
  <br />
  <div class="opertaion-center">
    รายการ :<input type="text" v-model="listname"/> 

    <button @click="addnewlist()">Add</button>
    <button @click="editlist()">Edit</button>
    <button @click="removelist()">Remove</button>
  </div>
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
    <tr v-for="list in BOQlist" @click="selectRow(list)" :key="list.id">
      <th>{{ list.BOQ_list_id }}</th>
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
</template>
<script>
import Service from "@/services/OneMeasureService";
export default {
  name: "boq_generation",
  data() {
    return {
      num: 0,
      BOQlist: null,
      listname: '',
      BOQ_list_id:0
    };
  },
  computed: {
    tableHeader() {
      return this.colums || [];
    },
    tableData() {
      return this.entries || [];
    },
  },
  created() {
    Service.get_all_BOQ_list()
      .then((response) => {
        this.BOQlist = response.data;
        console.log(this.BOQlist);
      })
      .catch(() => {
        // Swal.fire({
        //   icon: "error",
        //   title: "โปรดลองอีกครั้งภายหลัง",
        //   showConfirmButton: false,
        //   timer: 2000,
        // });
      });
  },
  methods: {
    addnewlist() {
      console.log("adding");
    },
    editlist() {
      console.log(this.BOQ_list_id);
      console.log(this.listname);
      Service.update_BOQ_list(this.BOQ_list_id, this.listname);
    },
    removelist() {
      console.log("removing");
    },
    selectRow(list) {
      this.BOQ_list_id = list.BOQ_list_id; 
      this.listname = list.list_name;
      console.log(list);
    },
  },
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
  background-color: #dddddd;
}
</style>
