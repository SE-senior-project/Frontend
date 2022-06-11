<template>
  <div class="clear-both w-max flex flex-row mt-[40px]">
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="grid grid-cols-2">
        <div class="w-[400px] mx-4">
          <TextField type="text" name="search" placeholder="ค้นหาวัสดุ" />
        </div>
        <div class="my-[9px]">
          <SecondaryButton>ค้นหา</SecondaryButton>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form } from "vee-validate";
import TextField from "@/components/field/TextField";
import SecondaryButton from "@/components/button/SecondaryButton";
export default {
  name: "search_material",
  components: {
    Form,
    TextField,
    SecondaryButton,
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "material_type",
      });
    },
  },
};
</script>
<style scoped>
</style>
