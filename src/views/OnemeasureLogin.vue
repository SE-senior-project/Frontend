<template>
  <br />
  <div class="container loginform">
    <div class="row">
      <div class="col-md-6 Logoform"></div>
      <div class="col-md-6 Loginform">
        <h2>SIGN IN</h2>
        <form>
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

  <br />
  <!-- <div class="container login-container">
    <div class="row">
      <div class="col-md-6 login-form-1">
        <h3>Login Form 1</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Your Password *"
              value=""
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Login" />
          </div>
          <div class="form-group">
            <a href="#" class="btnForgetPwd">Forget Password?</a>
          </div>
        </form>
      </div>
      <div class="col-md-6 login-form-2">
        <h3>Login Form 2</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Your Password *"
              value=""
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Login" />
          </div>
          <div class="form-group">
            <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
          </div>
        </form>
      </div>
    </div>
  </div> -->

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
  background: url("../assets/LogoOnemeasure.png");
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
  font-weight: 600;
  width: 50%;
  color: #282726;
  background-color: #fff;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
}
.btnForgetPwd {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.btnForgetPwd:hover {
  text-decoration: none;
  color: #fff;
}
h2 {
  padding-top: 0.5cm;
  font-size: 50px;
  text-align: center;
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
