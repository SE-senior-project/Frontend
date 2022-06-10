<template>
  <div class="card mb-10 shadow-xl rounded-lg">
    <div
      class="
        contractor
        text-white
        relative
        text-lg text-center
        py-[50px]
        bg-orange-500
      "
    >
      <div>
        <div class="absolute top-0 right-0 px-2 pt-1">
          <img
            @click="onSubmit"
            class="delete h-[25px] pl-[15px] p-[5px]"
            src="../../assets/x.png"
          />
        </div>
      </div>
    </div>
    <div class="text-sm px-[20px] pb-[30px] pt-[20px] bg-white">
      <p class="font-bold">ชื่อวัสดุ: {{ user.name }}</p>
      <p class="font-bold">ราคา: {{ user.id }}</p>
      <div class="flex justify-center items-center pt-[20px]">
        <p
          class="
            hidden
            px-4
            py-2
            mx-1
            text-gray-500
            transition-colors
            duration-200
            transform
            bg-white
            rounded-md
            sm:inline
            hover:bg-orange-500 hover:text-white
          "
          @click="decrease"
        >
          -
        </p>
        <input
          class="
            total_mat
            w-[40px]
            mx-[10px]
            p-[10px]
            border-none
            outline-none
            text-center
            rounded-lg
          "
          type="number"
          :value="number"
          min="1"
          disabled="disabled"
        />
        <p
          class="
            hidden
            px-4
            py-2
            mx-1
            text-gray-500
            transition-colors
            duration-200
            transform
            bg-white
            rounded-md
            sm:inline
            hover:bg-orange-500 hover:text-white
          "
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
export default {
  name: "total_material_card",
  components: {
    SecondaryButton,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      number: 1,
      toggle: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("yoo");
    },
    decrease() {
      if (this.number != 1) {
        this.number = this.number - 1;
      } else {
      }
    },
    increase() {
      this.number = this.number + 1;
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
</style>
