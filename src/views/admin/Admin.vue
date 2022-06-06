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
      <div class="header float-left">
        <a :href="'admin'">การอนุมัติบัญชี</a>
        | <a :href="'manage_account'">การจัดการบัญชี</a>
      </div>

      <div class="updateForm float-right">
        <form @submit.prevent="onUpdate">
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
                <option value="1">มกราคม</option>
                <option value="2">กุมภาพันธ์</option>
                <option value="3">มีนาคม</option>
                <option value="4">เมษายน</option>
                <option value="5">พฤษภาคม</option>
                <option value="6">มิถุนายน</option>
                <option value="7">กรกฎาคม</option>
                <option value="8">สิงหาคม</option>
                <option value="9">กันยายน</option>
                <option value="10">ตุลาคม</option>
                <option value="11">พฤศจิกายน</option>
                <option value="12">ธันวาคม</option>
              </select>
              <PrimaryButton>อัพเดท</PrimaryButton>
            </div>
          </FormWrapper>
        </form>
      </div>
      <div class="clear-both">
        <div>
          <TextLabel class="text-2xl mb-10" label="ผู้รับเหมา" />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ContactorCard
              label="ปิดการใช้งาน"
              v-for="x in users"
              :key="x.id"
              :user="x"
            />
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
import ApiClient from "../../services/OneMeasureService.js";
export default {
  name: "OMadmin",
  components: {
    ContactorCard,
    NewAccountCard,
    FormWrapper,
    PrimaryButton,
    TextLabel,
  },
  methods: {
    onUpdate(e) {
      var current = new Date();
      var month = current.getMonth() + 1;
      var check = parseInt(e.target.month.value);
      var mm = "";
      console.log(month);
      if (month === check) {
        this.$swal("This month cannot update data");
        return 'cannot';
      }
      if (check > month) {
        this.$swal("This month cannot update data");
        return 'cannot';
      }
      if (check == month - 1) {
        this.$swal("This month cannot update data");
        return 'cannot';
      }

      if (check == 1) {
        mm = "01";
        console.log(mm);
      } else if (check == 2) {
        mm = "02";
        console.log(mm);
      } else if (check == 3) {
        mm = "03";
        console.log(mm);
      } else if (check == 4) {
        mm = "04";
        console.log(mm);
      } else if (check == 5) {
        mm = "05";
        console.log(mm);
      } else if (check == 6) {
        mm = "06";
        console.log(mm);
      } else if (check == 7) {
        mm = "07";
        console.log(mm);
      } else if (check == 8) {
        mm = "08";
        console.log(mm);
      } else if (check == 9) {
        mm = "09";
        console.log(mm);
      } else if (check == 10) {
        mm = "10";
        console.log(mm);
      } else if (check == 11) {
        mm = "11";
        console.log(mm);
      } else if (check == 12) {
        mm = "12";
        console.log(mm);
      }
      ApiClient.update_external_data(mm)
        .then(() => {
          this.$swal("This month already updated");
        })
        .catch(() => {
          this.message = "Cannot login to the system.";
        });
    },
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
