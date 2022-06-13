<template>
  <!-- <input type="text" v-model="input" placeholder="Search fruits..." />
  <div class="item fruit" v-for="x in filteredList()" :key="x">
    <p v-if="input">{{ x }}</p>
  </div> -->
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
  data() {
    return {
      fruits: ["thit", "san", "tan"],
      password: "",
      checked: null,
      input: "",
    };
  },
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
  filteredList() {
    return this.fruits.filter((fruit) =>
      fruit.toLowerCase().includes(this.input.toLowerCase())
    );
  },
};
</script>
<style scoped>
</style>


