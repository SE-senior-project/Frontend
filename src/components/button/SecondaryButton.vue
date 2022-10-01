<template>
  <BaseButton
    class="bg-orange-100 text-orange-700 hover:bg-orange-300 active:bg-orange-500 active:text-white"
    ><slot
  /></BaseButton>
</template>

<script>
import BaseButton from "../button/BaseButton.vue";
export default {
  name: "secondary_button",
  components: {
    BaseButton,
  },
};
</script>

<style></style>
