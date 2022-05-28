<template>
  <div class="container mx-auto grid justify-items-center">
    <h1>Base Button</h1>
    <BaseButton>test</BaseButton>

    <h1>Primary Button</h1>
    <PrimaryButton>test</PrimaryButton>

    <h1>Secondary Button</h1>
    <SecondaryButton>test</SecondaryButton>
  </div>
</template>

<script>
import BaseButton from "../components/button/BaseButton.vue";
import PrimaryButton from "../components/button/PrimaryButton.vue";
import SecondaryButton from "../components/button/SecondaryButton.vue";
export default {
  name: "showcase",
  components: {
    PrimaryButton,
    SecondaryButton,
    BaseButton
  },
};
</script>

<style>
</style>