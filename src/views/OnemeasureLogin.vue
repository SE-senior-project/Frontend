<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6" id="logo"></div>
      <div class="col-md-6">
        <form>
          <h2>SIGN IN</h2>
          <br />
          <div class="form-group">
            <label for="exampleInputPassword1">Username:</label>
            <input
              class="form-control"
              type="text"
              placeholder="input username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password:</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="input password"
              v-model="password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-light">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <!-- <form @submit.prevent="onLogin"> -->
</template>

<script>
// import Service from "../services/OneMeasureService.js";
export default {
  name: "OnemeasureLogin",
  //   inject: ["GStore"],
  //   components: {},
  data() {
    return {
      username: "",
      password: "",
      checked: null,
    };
  },

  //   methods: {
  //     onLogin() {
  //       let data = {
  //         username: this.username,
  //         password: this.password,
  //       };
  //       Service.Login(data)
  //         .then((response) => {
  //           this.GStore.currentUserid = response.data[0].userid;
  //           this.GStore.currentUser = response.data[0].user;
  //           this.checked = response.data[0].check;
  //           console.log(this.checked);
  //           if (this.checked == true) {
  //             this.$router.push({
  //               name: "Searchlist",
  //             });
  //           } else {
  //             location.reload();
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     },
  //   }
};
</script>

<style scoped>
.container-fluid {
  border: 1px solid rgb(60, 74, 125);
}
#fuildtemplate {
  padding-left: 150px;
  padding-right: 150px;
}
h2 {
  padding-top: 0.5cm;
  font-size: 50px;
  text-align: center;
}
#con2 {
  background-size: cover;
  border-top: 1px solid rgb(60, 74, 125);
  border-left: 1px solid rgb(60, 74, 125);
  border-right: 1px solid rgb(60, 74, 125);
  border-bottom: 1px solid rgb(60, 74, 125);
}
#logo {
  background: url("../assets/LogoOnemeasure.png");
  background-size: cover;
  height: 650px;
  width: 650px;
  /* border-right: 3px solid rgb(85, 48, 3); */
}
.container {
  margin-top: 5%;
  color: black;
  background-size: cover;
  border-top: 3px solid rgb(85, 48, 3);
  border-left: 3px solid rgb(85, 48, 3);
  border-right: 3px solid rgb(85, 48, 3);
  border-bottom: 3px solid rgb(85, 48, 3);
  height: 100%;
}
/* ::selection {
  color: blue;
  background-color: slateblue;
}

#text {
  color: black;
  text-shadow: 2px 2px rgba(77, 108, 202, 0.755);
  font-style: italic;
}

#text2 {
  color: black;
  text-shadow: 2px 2px rgba(77, 108, 202, 0.755);
  font-style: italic;
  transition: all 0.5s;
}
#text2:hover {
  color: rgb(24, 24, 91);
  border-bottom: 2px solid rgb(39, 39, 138);
  font-style: italic;
}

#text1 {
  color: rgb(51, 51, 194);
  text-shadow: 2px 2px rgba(77, 108, 202, 0.755);
  font-style: italic;
  transition: all 0.5s;
}

#text1:hover {
  color: rgb(24, 24, 91);
  border-bottom: 2px solid rgb(39, 39, 138);
  font-style: italic;
} */
</style>
