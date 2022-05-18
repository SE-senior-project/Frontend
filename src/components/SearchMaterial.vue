<template>
  <input type="text" v-model="input" placeholder="Search fruits..." />
  <div class="item fruit" v-for="x in filteredList()" :key="x">
    <p v-if="input">{{ x }}</p>
  </div>
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
