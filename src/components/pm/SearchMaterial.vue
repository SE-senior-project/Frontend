<template>
  <div class="clear-both w-max flex flex-row mt-[40px]">
    <Form @submit="onSubmit" :validation-schema="schema">
      <div class="grid grid-cols-2">
        <div class="searchbox w-[400px] mx-4">
          <TextLabel :label="label" :required="required" />
          <div>
            <input
              v-bind="field"
              type="text"
              v-model="input"
              @input="handleInput"
              class="outline-none h-[41px] w-full rounded-lg border-[1px] px-4 text-sm font-normal leading-[17px] focus:text-black focus:placeholder-transparent disabled:!border-neutral-100 disabled:bg-neutral-100 disabled:!placeholder-neutral-500"
              placeholder="ค้นหาวัสดุ"
            />
            <div
              class="bg-white px-5 rounded-b-lg shadow-sm w-[400px] z-50 absolute overflow-y-scroll max-h-[400px]"
            >
              <div
                class="search"
                @click="onSelect(item.material_name)"
                v-for="item in filteredList"
                :key="item.id"
              >
              <!-- {{ item.material_name }} -->
                <p class="mt-5" v-if="show">{{ item.material_name }}</p>
                <hr v-if="show" />
              </div>
     
            </div>
          </div>
          <div class="h-[30px]" v-if="showError">
            <TextMessage :name="name" />
          </div>
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
import SecondaryButton from "@/components/button/SecondaryButton";
import TextLabel from "@/components/field/TextLabel.vue";
import TextMessage from "@/components/field/TextMessage.vue";
export default {
  name: "search_material",
  inject: ["GStore"],
  data() {
    return {
      fruits: ["thit", "san", "tan"],
      password: "",
      checked: null,
      input: "",
      show: false,
    };
  },
  components: {
    Form,
    SecondaryButton,
    TextLabel,
    TextMessage,
  },
  methods: {
    onSubmit() {
      this.GStore.searchResult = this.input;
      this.$router.push({
        name: "material_type_search",
      });
    },
    onSelect(value) {
      console.log(value);
      this.input = value;
      this.show = false;
    },
    handleInput(e) {
      this.show = true;
      if (e.target.value === "") {
        this.show = false;
      }
    },
  },
  computed: {
    filteredList() {
      let output = this.GStore.currentMaterial.filter((e) => e.material_name.includes(this.input));
      console.log(output);
      return output
    },
  },
};
</script>
<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #edeff2;
  margin: 1em 0;
  padding: 0;
}

.search:hover {
  transform: scale(1.02);
}
</style>
