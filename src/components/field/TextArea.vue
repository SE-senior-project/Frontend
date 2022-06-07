<template>
  <TextLabel :label="label" :required="required" />
  <div>
    <BasedTextArea
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
    />
  </div>
  <div class="h-[30px]" v-if="showError">
    <TextMessage :name="name" />
  </div>
</template>

<script>
import TextLabel from "../field/TextLabel.vue";
import TextMessage from "../field/TextMessage.vue";
import BasedTextArea from "../field/BasedTextArea.vue";
export default {
  name: "text_field",
  components: {
    TextLabel,
    TextMessage,
    BasedTextArea,
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
    rows: {
      type: Number,
      required: true,
    },
  },
};
</script>
