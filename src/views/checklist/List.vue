<template>
  <ul>
    <li
      v-for="list in GStore.allList"
      :key="list.id"
      @click="check_CheckBox(list)"
    >
      <br />
      <p>
        <b><span> </span>{{ list.list_name }}</b>
      </p>
      <br />
      <p><span> </span> description: {{ list.list_description }}</p>
      <p><span> </span> status: {{ list.status }}</p>
    </li>
  </ul>
</template>

<script>
import Service from "../../services/OneMeasureService";
export default {
  inject: ["GStore"],
  methods: {
    check_CheckBox(list) {
      Service.check_checkbox(list.checkbox_id);
      this.$router.go();
    },
  },
};
</script>

<style scoped>
span {
  padding: 10px;
}
</style>
