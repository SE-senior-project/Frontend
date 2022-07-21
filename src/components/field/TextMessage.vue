<template>
  <ErrorMessage class="text-red-500 text-xs italic" :name="name" />
</template>
<script>
import { ErrorMessage } from "vee-validate";

export default {
  name: "text_message",
  components: { ErrorMessage },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
