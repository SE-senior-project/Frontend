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
      <div class="pt-6 text-base flex flex-row space-x-2">
        <p class="font-bold">ชื่อ BOQ:</p>
        <div>
          {{ BOQ_name }}
        </div>
      </div>
      <br />
      <table class="w-full">
        <tr id="header">
          <td></td>
          <td>งาน</td>
          <td>ปริมาณรวม</td>
          <td>หน่วย</td>
          <td>ค่าวัสดุต่อหน่วย</td>
          <td>ค่าวัสดุรวม</td>
          <td>ค่าแรงต่อหน่วย</td>
          <td>ค่าแรงรวม</td>
          <td>ราคารวม</td>
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
      <div class="flex space-x-1">
        <p class="font-bold">ยอดรวมทั้งหมด:</p>
        <p>{{ GStore.CurrentTotalBOQlist }} บาท</p>
      </div>
      <br />
      <div class="flex flex-row mb-5 space-x-2 justify-end items-end">
        <PrimaryButton @click="nextPage">ยืนยัน</PrimaryButton>
      </div>
    </div>
  </div>
</template>
<script>
import Service from "@/services/OneMeasureService";
import Swal from "sweetalert2";
import { Form, Field, ErrorMessage } from "vee-validate";
import TextField from "@/components/field/TextField";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import * as yup from "yup";
export default {
  inject: ["GStore"],
  name: "boq_confirmation",
  components: {
    Form,
    Field,
    ErrorMessage,
    TextField,
    FormWrapper,
    PrimaryButton,
    SecondaryButton,
  },
  data() {
    const schema = yup.object().shape({
      list: yup.string().required("กรุณาระบุงาน"),
      unit: yup.string().required("กรุณาระบุหน่วย"),
      total_quantity: yup.string().required("กรุณาระบุปริมาณรวม"),
      cost_of_materials_per_unit: yup
        .string()
        .required("กรุณาระบุค่าวัสดุต่อหน่วย"),
      cost_of_wage_per_unit: yup.string().required("กรุณาระบุค่าแรงต่อหน่วย"),
    });
    return {
      BOQ_name: this.GStore.CurrentBOQUSE[0].BOQ_name,
      BOQ_id: this.GStore.CurrentBOQUSE[0].BOQ_id,
      schema,
      bait: null,
    };
  },
  methods: {
    addnewlist() {
      Service.add_BOQ_list(
        this.BOQ_id,
        this.list,
        this.total_quantity,
        this.unit,
        this.cost_of_materials_per_unit,
        this.cost_of_wage_per_unit
      );
      Swal.fire({
        icon: "success",
        title: "เพิ่มงานสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        this.$router.go();
      });
    },
    editlist(bait) {
      Service.update_BOQ_list(
        bait,
        this.list,
        this.total_quantity,
        this.unit,
        this.cost_of_materials_per_unit,
        this.cost_of_wage_per_unit
      );
      Swal.fire({
        icon: "success",
        title: "แก้ไขงานสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        this.$router.go();
      });
    },
    manage(list_id) {
      Swal.fire({
        title: "การจัดการ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ลบ",
        confirmButtonText: "แก้ไข",
      }).then((result) => {
        if (result.isConfirmed) {
          this.list = this.GStore.CurrentBOQUSE[list_id - 1].list_name;
          this.unit = this.GStore.CurrentBOQUSE[list_id - 1].unit;
          this.total_quantity =
            this.GStore.CurrentBOQUSE[list_id - 1].total_quantity;
          this.cost_of_materials_per_unit =
            this.GStore.CurrentBOQUSE[list_id - 1].cost_of_materials_per_unit;
          this.cost_of_wage_per_unit =
            this.GStore.CurrentBOQUSE[list_id - 1].cost_of_materials_per_unit;
          this.bait = this.GStore.CurrentBOQUSE[list_id - 1].BOQ_list_id;
        } else {
          Service.remove_BOQ_list(list_id);
          Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            this.$router.go();
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
