<template>
  <br />
  <br />
  <div class="container loginform">
    <div class="row">
      <div class="col-md-6 Logoform"></div>
      <div class="col-md-6 Loginform">
        <br />
        <h2>SIGN IN</h2>
        <form>
          <br />
          <div class="form-group inputform">
            <label for="exampleInputPassword1"><h5>Email</h5></label>
            <input
              class="form-control"
              type="email"
              placeholder="input @Email"
              v-model="email"
            />
          </div>
          <br />
          <div class="form-group inputform">
            <label for="exampleInputPassword1"><h5>Password</h5></label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="input password"
              v-model="password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-light btnSubmit">
            Sign In <font-awesome-icon icon="sign-in-alt" id="icon" />
          </button>
          <br />
          <br />
          <div class="form-group Signup">
            <p>
              Don't have an account?
              <router-link :to="{ name: 'register' }"> SIGN UP</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>

  <br />

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
