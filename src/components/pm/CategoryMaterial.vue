<template>
  <div
    class="
      card
      mx-[60px]
      md:mx-[40px]
      lg:mx-[20px]
      mb-10
      shadow-xl
      rounded-lg
      w-max
    "
  >
    <!-- <router-link
      class="link"
      :to="{ name: 'material_selection', params: { id: category.id } }"
    > -->
      <div class="contractor flex flex-row items-center">
        <img class="w-[100px]" src="../../assets/LogoOnemeasure.png" alt="" />
        <div class="text-sm px-[20px]">
          <p class="font-bold">ประเภทวัสดุ:</p>
          <p class="w-[100px]">{{ category.category_name }}</p>
        </div>
      </div>
    <!-- </router-link> -->
  </div>
</template>
<script>
export default {
  name: "material_selection_card",
  props: {
    category: {
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