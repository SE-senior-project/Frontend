<template>
  <Field :name="name" :type="type" v-slot="{ field }" :value="value">
    <input
      v-bind="field"
      :type="type"
      class="outline-none h-[41px] w-full rounded-lg border-[1px] px-4 text-sm font-normal leading-[17px] focus:text-black focus:placeholder-transparent disabled:!border-neutral-100 disabled:bg-neutral-100 disabled:!placeholder-neutral-500"
      :placeholder="placeholder"
      :required="required"
    />
  </Field>
</template>
<script>
import { Field } from "vee-validate";
export default {
  name: "based_field",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
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
