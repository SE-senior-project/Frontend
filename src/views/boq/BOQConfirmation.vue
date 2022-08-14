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
        <PrimaryButton @click="nextPage()">ยืนยัน</PrimaryButton>
      </div>
    </div>
  </div>
</template>
<script>
import Service from "@/services/OneMeasureService";
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
  mounted() {
    console.log(this.GStore.CurrentBOQUSE);
  },
  methods: {
    nextPage() {
      Service.update_BOQ_status(this.BOQ_id).then(() => {
        this.$router.push({
        name: "boq_template",
      });
      })
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
