<template>
  <Field :name="name" :type="type" v-slot="{ field }" :value="value">
    <textarea
      :rows="rows"
      :cols="cols"
      v-bind="field"
      :type="type"
      class="outline-none w-full rounded-lg border-[1px] px-4 pt-3 text-sm font-normal leading-[17px] focus:text-black focus:placeholder-transparent disabled:!border-neutral-100 disabled:bg-neutral-100 disabled:!placeholder-neutral-500"
      :placeholder="placeholder"
      :required="required"
    />
  </Field>
</template>
<script>
import { Field } from "vee-validate";
export default {
  name: "based_text_area",
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
    rows: {
      type: Number,
      required: true,
    },
  },
};
</script>
