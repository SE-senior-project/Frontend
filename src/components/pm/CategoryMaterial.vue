<template>
  <router-link
    class="link"
    :to="{ name: 'material_selection', params: { id: user.id } }"
  >
    <li>{{ user.name }}</li>
  </router-link>
</template>
<script>
export default {
  name: "category_material",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("yoyo");
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #a3a3a3;
  padding: 10px 10px;
  margin: 20px 0;
}

li:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
