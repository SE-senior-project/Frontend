<template>
  <header>
    <nav>
      <div class="branding">
        <img src="../assets/logonav.jpg" alt="" />
      </div>
      <br />
      <div class="Nameorg"><b>Onemeasure</b></div>
      <ul v-show="!mobile" class="navigation">
        <li></li>
        <li></li>
        <li v-if="GStore.currentUser">
          {{ GStore.currentUser.username }}
        </li>
        <li v-if="GStore.currentUser">
          <button type="submit" @click="logout">
            <b>ลงชื่อออก</b> <font-awesome-icon icon="sign-out-alt" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "OMnavigation",
  inject: ["GStore"],
  data() {
    return {
      user: null,
      count: 0,
    };
  },
  computed: {
    currentUser() {
      return AuthService.getUser();
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.GStore.currentUser = JSON.parse(localStorage.getItem("user"));
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
#icon {
  padding-left: 20px;
}
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
  color: rgb(214, 63, 33);
  border-color: rgb(201, 112, 44);
}
.Nameorg {
  max-width: 50px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  text-transform: uppercase;
}
.branding {
  display: flex;
  align-items: center;
}
img {
  width: 90px;
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
