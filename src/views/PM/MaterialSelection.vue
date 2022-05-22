<template>
  <Nav />
  <br />
  <SearchMaterial />
  <MaterialSelection
    v-for="x in materialselections"
    :key="x.id"
    :materialselection="x"
  />
</template>

<script>
import SearchMaterial from "../../components/PM_components/SearchMaterial.vue";
import Nav from "../../components/NavBarFeature.vue";
import MaterialSelection from "../../components/PM_components/MaterialSelectionCard.vue";
export default {
  name: "material_selection",
  components: {
    Nav,
    SearchMaterial,
    MaterialSelection,
  },
  data() {
    return {
      materialselections: [
        {
          name: "Mat1",
          id: 1,
        },
        {
          name: "Mat2",
          id: 2,
        },
        {
          name: "Mat3",
          id: 3,
        },
        {
          name: "Mat4",
          id: 4,
        },
        {
          name: "Mat5",
          id: 5,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
