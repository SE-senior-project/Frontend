<template>
  <div class="mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg">
    <div
      class="
        contractor
        text-white
        relative
        mb-[20px]
        text-lg text-center
        py-[50px]
        bg-orange-500
      "
    >
      <span>โปรเจคที่ {{ user.id }}</span>
      <div>
        <div
          @click="onSubmit"
          v-if="toggle"
          class="
            absolute
            top-0
            right-0
            nav-links
            flex
            list-none
            bg-orange-400
            h-max
            w-[150px]
            px-5
            py-3
            mt-9
            mr-2
            rounded-lg
          "
        >
          <li><span class="text-sm cursor-pointer">แสดงโปรเจค</span></li>
        </div>
        <div class="absolute top-0 right-0 px-2 pt-1">
          <img
            @click="toggle = !toggle"
            v-if="!toggle"
            class="h-[25px] pl-[15px] p-[5px]"
            src="../../assets/navbar.png"
          />
          <img
            @click="toggle = !toggle"
            v-if="toggle"
            class="h-[25px] pl-[15px] p-[5px]"
            src="../../assets/x.png"
          />
        </div>
      </div>
    </div>
    <router-link
      class="link"
      :to="{ name: 'material_list', params: { id: user.id } }"
    >
      <div class="text-sm font-bold w-5/6 m-auto mb-[20px]">
        <span>ชื่อ: {{ user.name }}</span>
      </div>
      <hr />
      <div class="text-sm px-[20px] pb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <hr />
      <div class="text-sm px-[20px] pb-[20px] flex flex-row float-right">
        <p class="text-sm font-bold">กำหนดการส่ง:</p>
        <p class="px-[10px]">DD/MM/YY</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "unhide_OMPM",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("yoyo");
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
