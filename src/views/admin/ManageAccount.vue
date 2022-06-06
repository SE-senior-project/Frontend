<template>
  <div class="relative flex justify-center items-center">
    <div class="max-w-5xl bg-white shadow-xl rounded-lg w-[1028px] mb-4 mx-8 px-10 py-5">
      <div class="header float-left">
        <a :href="'admin'">การอนุมัติบัญชี</a>
        | <a :href="'manage_account'">การจัดการบัญชี</a>
      </div>
      <div class="clear-both">
        <div>
          <TextLabel class="text-2xl mt-[50px] mb-10" label="ผู้รับเหมา" />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ContactorCard label="เปิดการใช้งาน" v-for="x in users" :key="x.id" :user="x" />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactorCard from "../../components/admin/ContactorCard.vue";
import PrimaryButton from "@/components/button/PrimaryButton";
import TextLabel from "@/components/field/TextLabel";
export default {
  name: "manage_account",
  components: {
    ContactorCard,
    PrimaryButton,
    TextLabel,
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
