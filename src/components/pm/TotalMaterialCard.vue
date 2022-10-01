<template>
  <div class="card mb-10 shadow-xl rounded-lg">
    <div
      class="contractor text-white relative text-lg text-center py-[50px] bg-orange-500"
    >
      <div>
        <div class="absolute top-0 right-0 px-2 pt-1">
          <img
            @click="onDelete"
            class="delete h-[25px] pl-[15px] p-[5px]"
            src="../../assets/x.png"
          />
        </div>
      </div>
    </div>
    <div class="text-sm px-[20px] pb-[30px] pt-[20px] bg-white">
      <div class="grid grid-cols-7">
        <p class="font-bold pr-1">ชื่อวัสดุ:</p>
        <p class="col-span-6">{{ material_selection.project_material_name }}</p>
      </div>
      <div class="flex flex-row">
        <p class="font-bold w-[40px]">ราคา:</p>
        <p>
          {{ parseFloat(decimal).toFixed(2) }}
        </p>
      </div>
      <div class="flex justify-center items-center pt-[20px]">
        <p
          class="hidden px-4 py-2 mx-1 text-gray-500 transition-colors duration-200 transform bg-white rounded-md sm:inline hover:bg-orange-500 hover:text-white"
          @click="decrease"
        >
          -
        </p>
        <input
          class="total_mat w-[55px] mx-[10px] p-[10px] border-none outline-none text-center rounded-lg"
          type="number"
          :value="number"
          min="1"
          disabled="disabled"
        />
        <p
          class="hidden px-4 py-2 mx-1 text-gray-500 transition-colors duration-200 transform bg-white rounded-md sm:inline hover:bg-orange-500 hover:text-white"
          @click="increase"
        >
          +
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import SecondaryButton from "@/components/button/SecondaryButton";
import Swal from "sweetalert2";
import Service from "@/services/OneMeasureService.js";
export default {
  name: "total_material_card",
  components: {
    SecondaryButton,
  },
  props: {
    material_selection: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      number: this.material_selection.project_material_total,
      id: this.material_selection.project_material_id,
      toggle: false,
      decimal:
        this.material_selection.project_material_price *
        this.material_selection.project_material_total,
    };
  },
  methods: {
    decrease() {
      if (this.number > 1) {
        this.number = this.number - 1;
        Service.number_material(this.number, this.id).catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          });
        });
        // this.$router.go();
      } else if (this.number == 1) {
        Swal.fire({
          title: "คุณต้องการลบวัสดุนี้ใช่ไหม?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "ยกเลิก",
          confirmButtonText: "ตกลง",
        }).then((result) => {
          if (result.isConfirmed) {
            Service.delete_material_selection(this.id).catch(() => {
              Swal.fire({
                icon: "error",
                title: "โปรดลองอีกครั้งภายหลัง",
                showConfirmButton: false,
                timer: 2000,
              });
            });
            this.$router.go();
          }
        });
      }
    },
    onDelete() {
      Swal.fire({
        title: "คุณต้องการลบวัสดุนี้ใช่ไหม?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Service.delete_material_selection(this.id).catch(() => {
            Swal.fire({
              icon: "error",
              title: "โปรดลองอีกครั้งภายหลัง",
              showConfirmButton: false,
              timer: 2000,
            });
          });
          this.$router.go();
        }
      });
    },
    increase() {
      this.number = this.number + 1;
      Service.number_material(this.number, this.id).catch(() => {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      });
      // this.$router.go();
    },
  },
};
</script>

<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #edeff2;
  margin: 1em 0;
  padding: 0;
}

.card:hover {
  transform: scale(1.05);
}

.delete:active {
  transform: scale(1.2);
}

.nav-links::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  background-color: #fa903d;
  right: 9px;
  top: -4px;
  transform: rotate(45deg);
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
