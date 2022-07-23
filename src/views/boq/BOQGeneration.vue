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
  <table class="center">
    <tr>
      <td>
        <div class="input">
          รายการ :<input type="text" v-model="listname" />
        </div>
      </td>
      <td>
        <div class="input">
          พื้นที่ :<input type="text" v-model="total_quantity" />
        </div>
      </td>
      หน่วย :<input type="text" v-model="unit" />
      <td>
        <div class="input">
          ค่าวัสดุต่อหน่วย :<input
            type="text"
            v-model="cost_of_materials_per_unit"
          />
        </div>
      </td>
      <td>
        <div class="input">
          ค่าแรงต่อหน่วย :<input type="text" v-model="cost_of_wage_per_unit" />
        </div>
      </td>
    </tr>
  </table>
  <div class="opertaion-center">
    <button @click="addnewlist()">Add</button>
    <button @click="editlist()">| Edit</button>
    <button @click="clearselectRow()">| Clear</button>
  </div>
  <br />
  <table class="center">
    <tr id="header">
      <td></td>
      <th>ลำดับ</th>
      <td>รายการ</td>
      <td>พื้นที่</td>
      <td>หน่วย</td>
      <td>ค่าวัสดุต่อหน่วย</td>
      <td>ราคาวัสดุรวม</td>
      <td>ค่าแรงต่อหน่วย</td>
      <td>ค่าแรงรวม</td>
      <td>ยอดรวม</td>
      <td></td>
    </tr>
    <tr v-for="(list, index) in GStore.CurrentBOQUSE" :key="list.id">
      <td @click="selectRow(list)">select</td>
      <th>{{ index + 1 }}</th>
      <td>{{ list.list_name }}</td>
      <td>{{ list.total_quantity }}</td>
      <td>{{ list.unit }}</td>
      <td>{{ list.cost_of_materials_per_unit }}</td>
      <td>{{ list.total_cost_materials }}</td>
      <td>{{ list.cost_of_wage_per_unit }}</td>
      <td>{{ list.total_wages }}</td>
      <td>{{ list.total_price }}</td>
      <td @click="removelist(list.BOQ_list_id)">remove</td>
    </tr>
  </table>
  <br />
  <div class="opertaion-center">ยอดรวมทั้งหมด:{{  GStore.CurrentTotalBOQlist }}</div>
  <br />
</template>
<script>
import Service from "@/services/OneMeasureService";
import Swal from "sweetalert2";
export default {
  inject: ["GStore"],
  name: "boq_generation",
  data() {
    return {
      total_BOQ_price: 0,
      BOQlist: null,
      listname: null,
      BOQ_list_id: null,
      total_quantity: null,
      unit: null,
      cost_of_materials_per_unit: null,
      cost_of_wage_per_unit: null,
      BOQ_totoal_price: null,
      BOQ_id: null,
    };
  },
  // created() {
  //   Service.get_BOQ_list(1)
  //     .then((response) => {
  //       this.BOQlist = response.data;
  //       console.log(this.BOQlist);
  //       var sum = 0;
  //       this.BOQ_id = response.data[0].BOQ_id;
  //       console.log("BOQ_id " + this.BOQ_id);
  //       this.BOQlist.forEach((element) => (sum = sum + element.total_price));
  //       this.total_BOQ_price = sum;
  //     })
  //     .catch(() => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "โปรดลองอีกครั้งภายหลัง",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //     });
  // },
  methods: {
    addnewlist() {
      Service.add_BOQ_list(
        this.BOQ_id,
        this.listname,
        this.total_quantity,
        this.unit,
        this.cost_of_materials_per_unit,
        this.cost_of_wage_per_unit
      ).then(() => {
        // this.$router.go();
      });
    },
    editlist() {
      Service.update_BOQ_list(
        this.BOQ_list_id,
        this.listname,
        this.total_quantity,
        this.unit,
        this.cost_of_materials_per_unit,
        this.cost_of_wage_per_unit
      ).then(() => {
        this.$router.go();
      });
    },
    removelist(list_id) {
      Swal.fire({
        title: "คุณต้องการที่จะลบรายการใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ลบรายการ",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.remove_BOQ_list(list_id);
          Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            this.$router.go();
          });
        }
      });
    },
    selectRow(list) {
      this.BOQ_id= list.BOQ_id;
      this.BOQ_list_id = list.BOQ_list_id;
      this.listname = list.list_name;
      this.total_quantity = list.total_quantity;
      this.unit = list.unit;
      this.cost_of_materials_per_unit = list.cost_of_materials_per_unit;
      this.cost_of_wage_per_unit = list.cost_of_wage_per_unit;
      console.log(list);
    },
    clearselectRow() {
      this.BOQ_list_id = null;
      this.listname = null;
      this.total_quantity = null;
      this.unit = null;
      this.cost_of_materials_per_unit = null;
      this.cost_of_wage_per_unit = null;
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
  background-color: #dddddda2;
}
</style>
