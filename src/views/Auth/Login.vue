<template>
  <br />
  <br />
  <div
    class="
      login-form
      max-w-xl
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      overflow-hidden
      md:max-w-5xl
    "
  >
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-full"
          src="../../assets/LogoOnemeasure.png"
          alt="Man looking at item at a store"
        />
      </div>
      <div class="p-8">
        <!-- <div class="text-center">
          <h2 class="">SIGN IN</h2>
          <form @submit.prevent="onLogin">
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
        </div> -->
        <form class="w-full max-w-lg">
          <div class="md:flex md:items-center mb-6"></div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="inline-email"
              >
                Email
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-orange-400
                "
                id="inline-full-name"
                type="email"
                placeholder="input email"
              />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                "
                for="inline-password"
              >
                Password
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="
                  bg-gray-200
                  appearance-none
                  border-2 border-gray-200
                  rounded
                  w-full
                  py-2
                  px-4
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-orange-400
                "
                id="inline-password"
                type="password"
                placeholder="input password"
              />
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-2/3"></div>
            <div class="md:w-2/3">
              <button
                class="
                  btnSubmit
                  shadow
                  bg-stone-500
                  hover:bg-orange-400
                  focus:shadow-outline focus:outline-none
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                "
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import Service from "../services/OneMeasureService.js";
// import { Field, Form } from 'vee-validate';
export default {
  name: "OMlogin",
  // components: {
  //   Field,
  //   Form,
  // },
  data() {
    return {
      email: "",
      password: "",
      checked: null,
    };
  },
  methods: {
    onLogin() {
      let data = {
        username: this.email,
        password: this.password,
      };
      if (data.username == "kong@gmail.com") {
        this.$router.push({
          name: "project",
        });
      } else {
        this.$router.push({
          name: "admin",
        });
      }
      // Service.Login(data)
      //   .then((response) => {
      //     this.GStore.currentUserid = response.data[0].userid;
      //     this.GStore.currentUser = response.data[0].user;
      //     this.checked = response.data[0].check;
      //     console.log(this.checked);
      //     if (this.checked == true) {
      //       this.$router.push({
      //         name: "Searchlist",
      //       });
      //     } else {
      //       location.reload();
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
</script>

<style scoped>
.btnSubmit {
  border: 1px solid rgba(100, 97, 97, 0.436);
}
.login-form{
  
}
</style>
