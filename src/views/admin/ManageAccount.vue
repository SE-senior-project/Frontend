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
      <div class="clear-both">
        <div>
          <TextLabel class="text-2xl mt-[50px] mb-10" label="ผู้รับเหมา" />
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            <ContactorCard
              label="เปิดการใช้งาน"
              v-for="user in disable_contractor"
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
import ContactorCard from "../../components/admin/DisableContractorCard.vue";
import PrimaryButton from "@/components/button/PrimaryButton";
import TextLabel from "@/components/field/TextLabel";
import Service from "../../services/OneMeasureService.js";
import NavAdmin from "@/components/NavAdmin";
import Swal from "sweetalert2";
export default {
  name: "manage_account",
  components: {
    ContactorCard,
    PrimaryButton,
    TextLabel,
    NavAdmin
  },
  data() {
    return {
      disable_contractor: null,
    };
  },
  created() {
    Service.get_all_disable_contractor()
      .then((response) => {
        this.disable_contractor = response.data;
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
};
</script>

<style scoped></style>
