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
      <NavAdmin />
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
              v-for="user in GStore.active_user"
              :key="user.id"
              :user="user"
            />
          </div>
        </div>
        <br />
        <div>
          <TextLabel class="text-2xl mb-10" label="บัญชีใหม่" />
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <NewAccountCard
              v-for="user in GStore.waiting_user "
              :key="user.id"
              :user="user"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactorCard from "../../components/admin/ActiveContactorCard.vue";
import NewAccountCard from "../../components/admin/NewAccountCard.vue";
import FormWrapper from "@/components/form/FormWrapper";
import PrimaryButton from "@/components/button/PrimaryButton";
import TextLabel from "@/components/field/TextLabel";
import Service from "../../services/OneMeasureService.js";
import Swal from "sweetalert2";
import NavAdmin from "@/components/NavAdmin";
export default {
  name: "OMadmin",
  inject: ["GStore"],
  components: {
    ContactorCard,
    NewAccountCard,
    FormWrapper,
    PrimaryButton,
    TextLabel,
    NavAdmin
  },
  data() {
    return {
      active_contractor: null,
    };
  },
  methods: {
    onUpdate(e) {
      var current = new Date();
      var month = current.getMonth() + 1;
      var check = parseInt(e.target.month.value);
      var mm = "";
      console.log(month);
      if (month === check) {
        Swal.fire({
          icon: "warning",
          title: "ไม่สามารถอัพเดทเดือนนี้",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          showConfirmButton: false,
          timer: 1500,
        });
        return "cannot";
      }
      if (check > month) {
        Swal.fire({
          icon: "warning",
          title: "ไม่สามารถอัพเดทเดือนนี้",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          showConfirmButton: false,
          timer: 1500,
        });
        return "cannot";
      }
      if (check == month - 1) {
        Swal.fire({
          icon: "warning",
          title: "ไม่สามารถอัพเดทเดือนนี้",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          showConfirmButton: false,
          timer: 1500,
        });
        return "cannot";
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
      Service.update_external_data(mm)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "อัพเดทสำเร็จ",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          })
        });
    },
  },
  created() {
    // Service.get_all_active_contractor()
    //   .then((response) => {
    //     this.active_contractor = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style scoped></style>
