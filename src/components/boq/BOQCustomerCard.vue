<template>
  <div @click="onSubmit(boq.id)" class="card h-fit mx-[60px] md:mx-[40px] lg:mx-[20px] rounded-[5px] mb-10 w-max bg-orange-400 hover:bg-orange-500" v-if="boq.status==1">
    <div class="flex flex-row h-auto pl-[30px] pt-[20px] pb-[90px] w-[300px] shadow-xl rounded-[5px]">
        <div class="w-full">
           <p class="text-xs">แบบลูกค้า: </p>
            <p class="pt-[2px] pl-[10px] pr-[40px] w-full text-2xl font-sans font-bold break-words">{{ boq.BOQ_name }}</p>
        </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "boq_card",
  props: {
    boq: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSubmit(boq_id) {
      Swal.fire({
        title: "คุณต้องการที่เลือก BOQ นี้ใช่ไหม",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push({
            name: 'show_template', 
            params: { id: boq_id }
          });
        }
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
  }
};
</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
}
</style>
