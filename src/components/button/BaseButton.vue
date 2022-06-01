<template>
  <button
    class="
      flex
      h-[37px]
      w-full
      max-w-[140px]
      items-center
      justify-center
      rounded-full
      py-[15px]
      font-bold
      text-base
      hover:cursor-pointer
    "
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "base_button",
};
</script>

<style>
</style>