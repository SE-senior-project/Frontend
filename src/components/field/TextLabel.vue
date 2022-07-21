<template>
  <label class="block text-gray-700 text-sm font-bold mb-2"
    >{{ label
    }}<span class="text-error-500 text-red-600" v-if="required">&nbsp;*</span>
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
