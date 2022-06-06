<template>
  <div class="relative flex justify-center items-center">
    <div
      class="max-w-5xl bg-white shadow-xl rounded-lg w-[1028px] mb-4 mx-8 px-10 py-5"
    >
      <div class="header float-left">
        <a :href="'admin'">การอนุมัติบัญชี</a>
        | <a :href="'manage_account'">การจัดการบัญชี</a>
      </div>

      <div class="updateForm float-right">
        <FormWrapper label="อัพเดทข้อมูล">
          <div class="flex flex-row space-x-2">
            <select
              name="month"
              autocomplete="month"
              class="
                outline-none
                h-[41px]
                w-[280px]
                rounded-lg
                border-[1px]
                px-4
                text-sm
                font-normal
                leading-[17px]
              "
            >
              <option selected>กรุณาเลือกเดือน</option>
              <option value="01">มกราคม</option>
              <option value="02">กุมภาพันธ์</option>
              <option value="03">มีนาคม</option>
              <option value="04">เมษายน</option>
              <option value="05">พฤษภาคม</option>
              <option value="06">มิถุนายน</option>
              <option value="07">กรกฎาคม</option>
              <option value="08">สิงหาคม</option>
              <option value="09">กันยายน</option>
              <option value="10">ตุลาคม</option>
              <option value="11">พฤศจิกายน</option>
              <option value="12">ธันวาคม</option>
            </select>
            <PrimaryButton>อัพเดท</PrimaryButton>
          </div>
        </FormWrapper>
      </div>
      <div class="clear-both">
        <div>
        <TextLabel class="text-2xl mb-10" label="ผู้รับเหมา" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <ContactorCard label="ปิดการใช้งาน" v-for="x in users" :key="x.id" :user="x" />
        </div>
      </div>
      <br />
      <div>
        <TextLabel class="text-2xl mb-10" label="บัญชีใหม่" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NewAccountCard v-for="x in users" :key="x.id" :user="x" />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactorCard from "../../components/admin/ContactorCard.vue";
import NewAccountCard from "../../components/admin/NewAccountCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import TextLabel from "@/components/field/TextLabel";
export default {
  name: "OMadmin",
  components: {
    ContactorCard,
    NewAccountCard,
    FormWrapper,
    PrimaryButton,
    TextLabel
  },
  data() {
    return {
      users: [
        {
          name: "Thitisan",
          id: 1,
        },
        {
          name: "Phonmongkhon",
          id: 2,
        },
        {
          name: "Pasakon",
          id: 3,
        },
        {
          name: "Sahachan",
          id: 4,
        },
        {
          name: "Khemata",
          id: 5,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
