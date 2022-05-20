<template>
  <br />
  <Nav />
  <br />
  <SearchMaterial />
  <br />
</template>

<script>
import SearchMaterial from "../../components/SearchMaterial.vue";
import Nav from "../../components/NavBarFeature.vue";
export default {
  name: "material_list",
  components: {
    SearchMaterial,
    Nav,
  },
  data() {
    return {
      username: "",
      password: "",
      checked: null,
    };
  },
};
</script>

<style scoped>
#icon {
  padding-left: 20px;
}
.Signup {
  text-align: center;
}
.inputform {
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}

.loginform {
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  max-width: 1200px;
  max-height: 1000px;
  margin: 0 auto;
}
.Loginform {
  width: 50%;
}
.Logoform {
  background: url("../../assets/LogoOnemeasure.png");
  background-size: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 50%;
  height: 600px;
  background-position: center;
  /* margin: 0 auto;
  padding-bottom: 20cm auto; */
}

.btnSubmit {
  font-weight: 550;
  width: 90%;
  color: #282726;
  background-color: #fff;
  border: none;
  border-radius: 1.5rem;
  border: 1px solid rgba(100, 97, 97, 0.436);
  padding: 2%;
}
.btnSubmit:hover {
  box-shadow: 0 5px 8px 0 rgba(245, 103, 1, 0.2),
    0 9px 26px 0 rgba(245, 103, 1, 0.19);
  font-style: italic;
}
/* @media (min-width: 576px) {
  .Logoform {
    background: url("../assets/LogoOnemeasure.png");
    background-size: cover;
    height: 650px;
    width: 650px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
   
  }
}
@media (max-width: 416px) {
  .Logoform {
    background: url("../assets/LogoOnemeasure.png");
    background-size: cover;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
} */

/* ::selection {
  color: blue;
  background-color: slateblue;
}*/
</style>
