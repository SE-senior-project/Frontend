<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <p class="block text-base font-bold mb-2">
      {{ label }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "form_wrapper",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>