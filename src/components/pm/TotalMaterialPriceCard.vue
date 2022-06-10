<template>
  <div
    class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg"
  >
    <div
      class="
        contractor
        text-white
        relative
        text-lg text-center
        py-[30px]
        bg-orange-500
      "
    >
    <p>ราคารวมของวัสดุ</p>
    </div>
    <div class="text-sm px-[20px] pb-[30px] pt-[20px]">
      <p class="font-bold">ราคา: </p>
      <div class="flex flex-row mt-5 space-x-2 justify-center items-center">
            <PrimaryButton @click="onSubmit">สร้าง BOQ</PrimaryButton>
            <SecondaryButton @click="onBack">ย้อนกลับ</SecondaryButton>
          </div>
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
export default {
  name: "total_material_price_card",
  components: {
    SecondaryButton,
    PrimaryButton
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    onSubmit() {
      console.log("yoo");
    },
    onBack() {
      this.$router.push({
        name: "material_type",
      });
    },
    decrease() {
      if( this.number != 1){
        this.number = this.number - 1
      }
      else {
        
      }
    },
    increase() {
       this.number = this.number + 1
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
</style>
