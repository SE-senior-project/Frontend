<template>
  <div class="relative flex justify-center items-center">
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
      <div class="pt-6 text-base flex space-x-2">
        <p class="font-bold">ชื่อ BOQ:</p>
        <p>
          {{ BOQ_name }}
        </p>
      </div>
      <br />
      <!-- {{ GStore.CurrentBOQUSE }} -->
      <table class="w-full">
        <tr id="header">
          <th>ลำดับ</th>
          <td>งาน</td>
          <td>ปริมาณรวม</td>
          <td>หน่วย</td>
          <td>ค่าวัสดุต่อหน่วย</td>
          <td>ราคาวัสดุรวม</td>
          <td>ค่าแรงต่อหน่วย</td>
          <td>ค่าแรงรวม</td>
          <td>ยอดรวม</td>
        </tr>

        <tr v-for="(list, index) in GStore.CurrentBOQUSE" :key="list.id">
          <th v-if="!check">{{ index + 1 }}</th>
          <td v-if="!check">{{ list.list_name }}</td>
          <td v-if="!check">{{ list.total_quantity }}</td>
          <td v-if="!check">{{ list.unit }}</td>
          <td v-if="!check">{{ list.cost_of_materials_per_unit }}</td>
          <td v-if="!check">{{ list.total_cost_materials }}</td>
          <td v-if="!check">{{ list.cost_of_wage_per_unit }}</td>
          <td v-if="!check">{{ list.total_wages }}</td>
          <td v-if="!check">{{ list.total_price }}</td>
        </tr>
      </table>
      <br />
      <div class="flex space-x-1">
        <p class="font-bold">ยอดรวมทั้งหมด:</p>
        <p>
          {{ totalCost }}
          บาท
        </p>
      </div>
      <br />

      <div class="flex flex-row mb-5 space-x-2 justify-end items-end">
        <PrimaryButton @click="edit()">ใช้ BOQ </PrimaryButton>
        <SecondaryButton @click="generate()" class="max-w-[200px]">สร้าง BOQ จากสำเนาเดิม</SecondaryButton>
      </div>
    </div>
  </div>
</template>
<script>
import Service from "@/services/OneMeasureService";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import Swal from "sweetalert2";
export default {
  inject: ["GStore"],
  name: "boq_confirmation",
  components: {
    PrimaryButton,
    SecondaryButton,
  },
  data() {
    return {
      last_id: null,
      BOQ_name: null,
      check: false,
      totalCost: 0,
    };
  },
  mounted() {
    if (isNaN(this.GStore.CurrentTotalBOQlist)) {
      this.totalCost = 0;
    } else {
      this.totalCost = this.GStore.CurrentTotalBOQlist;
    }
    let len = parseInt(Object.keys(this.GStore.CurrentBOQUSE).length);
    if (this.GStore.CurrentBOQUSE[0].list_name === undefined) {
      this.check = true;
    }
    if (len == 0) {
      this.BOQ_name = null;
    } else {
      this.BOQ_name = this.GStore.CurrentBOQUSE[0].BOQ_name;
    }
  },
  methods: {
    edit() {
      let idused = parseInt(this.GStore.CurrentBOQUSE[0].BOQ_id);
      this.$router.push({ name: "boq_gen", params: { id: idused } });
    },
    generate() {
      let id = parseInt(this.GStore.CurrentBOQUSE[0].BOQ_id);
      console.log(id);
      Swal.fire({
        title: "คุณต้องการสร้าง BOQ ใหม่จากแบบ BOQ ที่เลือกนี้ใช่ไหม",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.generateBOQ(id, parseInt(this.GStore.current_project))
            .then((response) => {
              this.GStore.currentLastBOQId = response.data;
              this.last_id = this.GStore.currentLastBOQId.last_id;
              this.$router.push({
                name: "boq_gen",
                params: { id: this.last_id },
              });
            })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "โปรดลองอีกครั้งภายหลัง",
                showConfirmButton: false,
                timer: 2000,
              }).then(() => {
                this.$router.go();
              });
            });
        }
      });
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
