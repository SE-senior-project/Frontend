<template>
  <Nav />
  <br />
  <SearchMaterial />
  <MaterialType v-for="x in materialtypes" :key="x.id" :materialtype="x" />
</template>

<script>
import SearchMaterial from "../../components/PM_components/SearchMaterial.vue";
import Nav from "../../components/NavBarFeature.vue";
import MaterialType from "../../components/PM_components/MaterialTypeCard.vue";
export default {
  name: "material_type",
  components: {
    Nav,
    SearchMaterial,
    MaterialType,
  },
  data() {
    return {
      materialtypes: [
        {
          name: "Mattype1",
          id: 1,
        },
        {
          name: "Mattype2",
          id: 2,
        },
        {
          name: "Mattype3",
          id: 3,
        },
        {
          name: "Mattype4",
          id: 4,
        },
        {
          name: "Mattype5",
          id: 5,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
