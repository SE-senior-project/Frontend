<template>
  <BaseButton
    class="bg-orange-500 text-white hover:bg-orange active:bg-orange-900"
    ><slot
  /></BaseButton>
</template>

<script>
import BaseButton from "../button/BaseButton.vue";
export default {
  name: "primary_button",
  components: {
    BaseButton,
  },
};
</script>

<style></style>
