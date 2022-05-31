<template>
  <label class="flex text-sm font-semibold leading-[17px] text-neutral-900"
    >{{ label }}<span class="text-error-500" v-if="required">&nbsp;*</span>
  </label>
</template>
<script>
export default {
  name: "text_field",
  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
