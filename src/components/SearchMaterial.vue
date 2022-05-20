<template>
  <input
    type="text"
    v-model="input"
    placeholder="Search Materials..."
    id="inputsearch"
  />
  <div class="item fruit" v-for="x in filteredList()" :key="x">
    <p v-if="input">{{ x }}</p>
  </div>
  <br v-if="input" />
  <br v-if="input" />
</template>

<script>
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
  methods: {
    filteredList() {
      return this.fruits.filter((fruit) =>
        fruit.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
};
</script>
<style scoped>
#inputsearch {
  border: solid black 1px;
}
</style>
