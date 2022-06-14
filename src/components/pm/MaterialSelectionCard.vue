<template>
  <div
    class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg"
  >
    <!-- <router-link
      class="link"
      :to="{ name: 'material_type', params: { id: user.id } }"
    > -->
    <div
      @click="onSubmit(alltype.material_type)"
      class="
        contractor
        text-white
        relative
        mb-[20px]
        text-lg text-center
        py-[50px]
        bg-orange-500
      "
    ></div>
    <div class="text-sm px-[20px] pb-[20px] flex flex-row">
      <p class="font-bold">ชื่อสินค้า: {{ alltype.material_type }}</p>
    </div>
    <!-- </router-link> -->
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
