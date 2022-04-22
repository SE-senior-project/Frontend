<template>
  <header>
    <nav>
      <div class="branding">
        <img src="../assets/logonav.jpg" alt="" />
      </div>
      <br />
      <div class="Nameorg">Onemeasure</div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'home' }"> Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }"> Hi</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }"> Heiei</router-link>
        </li>
        <li>
          <button type="submit" class="btn btn-light btnSubmit">
            <b>Sign Out</b>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "OnemeasureNavigation",
  data() {
    return {};
  },
};
</script>

<style scoped>
.btnSubmit {
  color: #282726;
  background-color: #fff;
}
.btnSubmit:hover {
  box-shadow: 0 5px 8px 0 rgba(245, 103, 1, 0.2),
    0 9px 26px 0 rgba(245, 103, 1, 0.19);
}
header {
  background-color: #ff914d;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: white;
}
nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
  }
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
ul,
.link {
  font-weight: 500;
  color: white;
  list-style: none;
  text-decoration: none;
}
li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transform: 0.5 ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.link:hover {
  color: skyblue;
  border-color: blue;
}
.Nameorg {
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-transform: uppercase;
}
.branding {
  display: flex;
  align-items: center;
}
img {
  width: 50px;
  transition: 0.5s ease all;
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(180deg);
}
</style>
