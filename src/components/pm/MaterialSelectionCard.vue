<template>
  <div
    class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg relative"
    @click="onSubmit(alltype.material_type)"
    v-if="alltype.material_type != null"
  >
    <div
      class="
        contractor
        text-white
        relative
        mb-[20px]
        pt-[20px]
        pb-[80px]
        
      "
    >
     <img class="w-[100px] block m-auto" :src="'Image/'+alltype.material_type+'.png'" />
    </div>
    <div class="text-sm px-[20px] pt-[30px] pb-[20px] bg-orange-400 rounded-b-lg absolute bottom-0 w-full text-[#352315]">
      <div class="grid grid-cols-4 ">
        <p class="font-bold pr-1">ชื่อสินค้า:</p>
        <p class="col-span-3">{{ alltype.material_type }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "material_selection_card",
  inject: ["GStore"],
  props: {
    alltype: {
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
    onSubmit(material_type) {
      this.GStore.currentSelectiontype = material_type;
      console.log(material_type);
      this.$router.push({
        name: "material_type",
      });
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
