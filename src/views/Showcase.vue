<template>
  <div class="container mx-auto grid justify-items-center">
    <h1>Base Button</h1>
    <BaseButton>test</BaseButton>

    <h1>Primary Button</h1>
    <PrimaryButton>test</PrimaryButton>

    <h1>Secondary Button</h1>
    <SecondaryButton>test</SecondaryButton>

    <h1>Field</h1>
    <TextField >

    </TextField>
  </div>
</template>

<script>
import BaseButton from "../components/button/BaseButton.vue";
import PrimaryButton from "../components/button/PrimaryButton.vue";
import SecondaryButton from "../components/button/SecondaryButton.vue";
import TextField from "../components/field/TextField.vue"
export default {
  name: "showcase",
  components: {
    PrimaryButton,
    SecondaryButton,
    BaseButton,
    TextField,
  },
};
</script>

<style>
</style>