<template>
  <div class="relative flex justify-center">
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
        <div class="mt-2">
          <Field
            name="BOQ_name"
            type="text"
            v-slot="{ field }"
            v-model="BOQ_name"
          >
            <input
              v-bind="field"
              type="text"
              class="
                outline-none
                h-[41px]
                w-full
                rounded-lg
                border-[1px]
                px-4
                text-sm
                font-normal
                leading-[17px]
                focus:text-black focus:placeholder-transparent
                disabled:!border-neutral-100
                disabled:bg-neutral-100
                disabled:!placeholder-neutral-500
              "
              placeholder="BOQ"
            />
          </Field>
        </div>
      </div>
      <div class="relative w-max">
        <Form :validation-schema="schema">
          <FormWrapper label="สร้างงาน">
            <div class="flex flex-col lg:flex-row">
              <div class="w-[400px] mx-4">
                <div class="w-full flex flex-row space-x-2">
                  <div class="w-full flex flex-col space-x-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      งาน
                      <span class="text-error-500 text-red-600">&nbsp;*</span>
                    </label>
                    <Field
                      name="list"
                      type="text"
                      v-slot="{ field }"
                      v-model="list"
                    >
                      <input
                        v-bind="field"
                        type="text"
                        class="
                          outline-none
                          h-[41px]
                          w-full
                          rounded-lg
                          border-[1px]
                          px-4
                          text-sm
                          font-normal
                          leading-[17px]
                          focus:text-black focus:placeholder-transparent
                          disabled:!border-neutral-100
                          disabled:bg-neutral-100
                          disabled:!placeholder-neutral-500
                        "
                        placeholder="งาน"
                      />
                    </Field>
                    <ErrorMessage
                      class="text-red-500 text-xs italic"
                      name="list"
                    />
                  </div>
                  <div class="w-full flex flex-col space-x-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      หน่วย
                      <span class="text-error-500 text-red-600">&nbsp;*</span>
                    </label>
                    <Field
                      name="unit"
                      type="text"
                      v-slot="{ field }"
                      v-model="unit"
                    >
                      <input
                        v-bind="field"
                        type="text"
                        class="
                          outline-none
                          h-[41px]
                          w-full
                          rounded-lg
                          border-[1px]
                          px-4
                          text-sm
                          font-normal
                          leading-[17px]
                          focus:text-black focus:placeholder-transparent
                          disabled:!border-neutral-100
                          disabled:bg-neutral-100
                          disabled:!placeholder-neutral-500
                        "
                        placeholder="หน่วย"
                      />
                    </Field>
                    <ErrorMessage
                      class="text-red-500 text-xs italic"
                      name="unit"
                    />
                  </div>
                </div>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 pt-[30px]"
                >
                  ปริมาณรวม
                  <span class="text-error-500 text-red-600">&nbsp;*</span>
                </label>
                <Field
                  name="total_quantity"
                  type="text"
                  v-slot="{ field }"
                  v-model="total_quantity"
                >
                  <input
                    v-bind="field"
                    type="text"
                    class="
                      outline-none
                      h-[41px]
                      w-full
                      rounded-lg
                      border-[1px]
                      px-4
                      text-sm
                      font-normal
                      leading-[17px]
                      focus:text-black focus:placeholder-transparent
                      disabled:!border-neutral-100
                      disabled:bg-neutral-100
                      disabled:!placeholder-neutral-500
                    "
                    placeholder="ปริมาณรวม"
                  />
                </Field>
                <ErrorMessage
                  class="text-red-500 text-xs italic"
                  name="total_quantity"
                />
              </div>
              <div class="w-[400px] mx-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  ค่าวัสดุต่อหน่วย
                  <span class="text-error-500 text-red-600">&nbsp;*</span>
                </label>
                <Field
                  name="cost_of_materials_per_unit"
                  type="text"
                  v-slot="{ field }"
                  v-model="cost_of_materials_per_unit"
                >
                  <input
                    v-bind="field"
                    type="text"
                    class="
                      outline-none
                      h-[41px]
                      w-full
                      rounded-lg
                      border-[1px]
                      px-4
                      text-sm
                      font-normal
                      leading-[17px]
                      focus:text-black focus:placeholder-transparent
                      disabled:!border-neutral-100
                      disabled:bg-neutral-100
                      disabled:!placeholder-neutral-500
                    "
                    placeholder="ค่าวัสดุต่อหน่วย"
                  />
                </Field>
                <ErrorMessage
                  class="text-red-500 text-xs italic"
                  name="cost_of_materials_per_unit"
                />
                <label
                  class="block text-gray-700 text-sm font-bold mb-2 pt-[30px]"
                >
                  ค่าแรงต่อหน่วย
                  <span class="text-error-500 text-red-600">&nbsp;*</span>
                </label>
                <Field
                  name="cost_of_wage_per_unit"
                  type="text"
                  v-slot="{ field }"
                  v-model="cost_of_wage_per_unit"
                >
                  <input
                    v-bind="field"
                    type="text"
                    class="
                      outline-none
                      h-[41px]
                      w-full
                      rounded-lg
                      border-[1px]
                      px-4
                      text-sm
                      font-normal
                      leading-[17px]
                      focus:text-black focus:placeholder-transparent
                      disabled:!border-neutral-100
                      disabled:bg-neutral-100
                      disabled:!placeholder-neutral-500
                    "
                    placeholder="ค่าแรงต่อหน่วย"
                  />
                </Field>
                <ErrorMessage
                  class="text-red-500 text-xs italic"
                  name="cost_of_wage_per_unit"
                />
                <input type="hidden" v-model="bait" />
              </div>
            </div>
          </FormWrapper>
        </Form>
        <div class="flex flex-row mb-5 space-x-2 justify-end items-end">
          <PrimaryButton @click="addnewlist">เพิ่ม</PrimaryButton>
          <SecondaryButton @click="editlist(bait)">แก้ไข</SecondaryButton>
        </div>
      </div>
      <br />
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
          <td>ราคารวม</td>
          <td v-if="!check"></td>
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

          <td class="w-[200px]" v-if="!check">
            <div class="flex space-x-2">
              <PrimaryButton class="rounded-none" @click="edit(list)"
                >เลือก</PrimaryButton
              >
              <SecondaryButton class="rounded-none" @click="remove(list)"
                >ลบ</SecondaryButton
              >
            </div>
          </td>
        </tr>
      </table>
      <br />
      <div class="flex space-x-1">
        <p class="font-bold">ยอดรวมทั้งหมด:</p>
        <p>{{ totalCost }} บาท</p>
      </div>
      <br />
      <div class="flex flex-row mb-5 space-x-2 justify-end items-end">
        <PrimaryButton @click="changeName"> ยืนยัน </PrimaryButton>
      </div>
    </div>


    <div class="pt-[50px] w-[380px] relative">
      <div
        class="card mb-10 shadow-xl rounded-lg mr-[30px]">
        <p class="text-2xl text-center pb-[20px]">ราคาวัสดุ</p>
        <div class="text-sm mb-[20px] px-[20px] pb-[30px] pt-[20px] bg-white" v-for="list in GStore.material_selection" :key="list.id">
          <div class="grid grid-cols-7">
            <p class="font-bold pr-1">ชื่อวัสดุ:</p>
            <p class="col-span-6">{{ list.project_material_name }}</p>
          </div>
          <div class="grid grid-cols-7">
            <p class="font-bold pr-1">ราคา:</p>
            <p class="col-span-6">{{ list.project_material_price }}</p>
          </div>
        </div>
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
  name: "boq_gen",
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
      BOQ_name: null,
      BOQ_id: null,
      BOQ_list_id: null,
      schema,
      bait: null,
      check: false,
      totalCost: 0,
    };
  },
  mounted() {
    // console.log(this.GStore.material_selection);
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
    this.BOQ_id = this.GStore.CurrentBOQUSE[0].BOQ_id;
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
        title: "คุณต้องการเพิ่มงานนี้ใช่ไหม",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "เพิ่มงานสำเร็จ",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            Service.update_BOQ_name(this.BOQ_id, this.BOQ_name);
            this.$router.go();
          });
        }
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
        Service.update_BOQ_name(this.BOQ_id, this.BOQ_name);
        this.$router.go();
      });
    },
    edit(list) {
      this.list = list.list_name;
      this.unit = list.unit;
      this.total_quantity = list.total_quantity;
      this.cost_of_materials_per_unit = list.cost_of_materials_per_unit;
      this.cost_of_wage_per_unit = list.cost_of_materials_per_unit;
      this.BOQ_id = list.BOQ_id;
      this.BOQ_list_id = list.BOQ_list_id;
      this.bait = list.BOQ_list_id;
      Service.update_BOQ_name(this.BOQ_id, this.BOQ_name);
    },
    remove(list) {
      Swal.fire({
        title: "ต้องการลบงานนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.remove_BOQ_list(parseInt(list.BOQ_list_id)).then(() => {
            Service.update_BOQ_name(this.BOQ_id, this.BOQ_name);
            Swal.fire({
              icon: "success",
              title: "ลบงานสำเร็จ",
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              this.$router.go();
            });
          });
        }
      });
    },
    changeName() {
      Service.update_BOQ_name(this.BOQ_id, this.BOQ_name)
        .then(() => {
          this.$router.push({
            name: "boq_confirmation",
            params: { id: this.GStore.CurrentBOQUSE[0].BOQ_id },
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
