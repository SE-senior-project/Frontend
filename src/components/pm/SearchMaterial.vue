<template>
  <div class="clear-both w-max flex flex-row mt-[40px]">
    <input type="text" v-model="input" class="border-color: inherit;" />
    <ul>
      <li v-for="item in filteredList" :key="item.id">
        <p v-if="input">{{ item.material_name }}</p>
      </li>
    </ul>
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
   inject: ["GStore"],
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
  computed: {
    filteredList() {
      console.log(this.GStore.currentMaterial);
      let store = this.GStore.currentMaterial;
      return store.filter((e) => e.material_name.includes(this.input));
    },
  },
};
</script>
<style scoped>
</style>


