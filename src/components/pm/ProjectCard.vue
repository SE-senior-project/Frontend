<template>
  <div class="mx-[60px] lg:mx-[40px] mb-10 shadow-xl rounded-lg">
    <router-link
      class="link "
      :to="{ name: 'material_list', params: { id: user.id } }"
    >
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
      </div>
      <div class="text-sm font-bold w-5/6 m-auto mb-[20px]">
        <span>ชื่อ: {{ user.name }}</span>
      </div>
      <hr>
      <div class="text-sm px-[20px] pb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "OMPM",
  props: {
    user: {
      type: Object,
      required: true,
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
</style>
