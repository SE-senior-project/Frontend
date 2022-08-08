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
          <div class="pt-[15px]">
            <p class="font-bold">ชื่อ BOQ:</p>
          </div>
          <div>
            <TextField
              type="text"
              name="boq"
              placeholder="BOQ"
              :value="BOQ_name"
            />
          </div>
        </div>
      <div class="w-max">
        <Form @submit="addnewlist" :validation-schema="schema">
          <FormWrapper label="สร้างงาน">
            <div class="flex flex-col lg:flex-row">
              <div class="w-[400px] mx-4">
                <TextField
                  type="text"
                  name="list"
                  placeholder="งาน"
                  label="งาน"
                  required
                />
                <TextField
                  type="text"
                  name="total_quantity"
                  placeholder="ปริมาณรวม"
                  label="ปริมาณรวม"
                  required
                />
              </div>
              <div class="w-[400px] mx-4">
                <TextField
                  type="text"
                  name="cost_of_materials_per_unit"
                  placeholder="ค่าวัสดุต่อหน่วย"
                  label="ค่าวัสดุต่อหน่วย"
                  required
                />
                <TextField
                  type="text"
                  name="cost_of_wage_per_unit"
                  placeholder="ค่าแรงต่อหน่วย"
                  label="ค่าแรงต่อหน่วย"
                  required
                />
              </div>
            </div>
            <div class="flex flex-row mt-5 space-x-2 justify-end items-end">
              <PrimaryButton >เพิ่ม</PrimaryButton>
              <SecondaryButton @click="editlist()">แก้ไข</SecondaryButton>
            </div>
          </FormWrapper>
        </Form>
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
          <td></td>
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
          <td class="w-[100px]">
            <SecondaryButton
              class="rounded-none"
              @click="manage(list.BOQ_list_id)"
              >จัดการ</SecondaryButton
            >
          </td>
        </tr>
      </table>
      <br />
      <div class="flex space-x-1">
        <p class="font-bold">ยอดรวมทั้งหมด:</p>
        <p>{{ GStore.CurrentTotalBOQlist }} บาท</p>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import Service from "@/services/OneMeasureService";
import Swal from "sweetalert2";
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import * as yup from "yup";
export default {
  inject: ["GStore"],
  name: "boq_gen",
  components: {
    Form,
    TextField,
    FormWrapper,
    PrimaryButton,
    SecondaryButton,
  },
  data() {
    const schema = yup.object().shape({
      list: yup.string().required("กรุณาระบุชื่อโปรเจค"),
      total_quantity: yup.string().required("กรุณาระบุชื่อลูกค้า"),
      cost_of_materials_per_unit: yup.string().required("กรุณาระบุรายระเอียดโปรเจค"),
      cost_of_wage_per_unit: yup.string().required("กรุณาเลือกวันกำหนดส่งงาน"),
    });
    return {
      BOQ_name: this.GStore.CurrentBOQUSE[0].BOQ_name,
      BOQ_id: this.GStore.CurrentBOQUSE[0].BOQ_id,
      listname: this.GStore.CurrentBOQUSE[0].list_name,
      unit: this.GStore.CurrentBOQUSE[0].unit,
      schema,
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
    addnewlist(list) {
      Service.add_BOQ_list(
        this.BOQ_id,
        this.listname,
        list.total_quantity,
        this.unit,
        list.cost_of_materials_per_unit,
        list.cost_of_wage_per_unit,
      ).then(() => {
        this.$router.go();
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
        } else {
          Service.remove_BOQ_list(list_id);
        }
      });
    },
    selectRow(list) {
      this.BOQ_id = list.BOQ_id;
      this.BOQ_list_id = list.BOQ_list_id;
      this.listname = list.list_name;
      this.total_quantity = list.total_quantity;
      this.unit = list.unit;
      this.cost_of_materials_per_unit = list.cost_of_materials_per_unit;
      this.cost_of_wage_per_unit = list.cost_of_wage_per_unit;
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
