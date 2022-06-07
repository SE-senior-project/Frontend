<template>
  <TextLabel :label="label" :required="required" />
  <div>
    <BasedField
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
  <div class="h-[30px]" v-if="showError">
    <TextMessage :name="name" />
  </div>
</template>

<script>
import TextLabel from "../field/TextLabel.vue";
import TextMessage from "../field/TextMessage.vue";
import BasedField from "../field/BasedField.vue";
export default {
  name: "text_field",
  components: {
    TextLabel,
    TextMessage,
    BasedField,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    showError: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>
