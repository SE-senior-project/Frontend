<template>
  <br />
  <br />
  <div class="container loginform">
    <form>
      <br />
      <div class="form-group inputform">
        <h2>Create new Project ei ei</h2>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6 Loginform">
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
          <!-- <div class="form-group inputform">
            <label for="exampleFormControlTextarea1"
              ><h5>Example textarea</h5></label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="input password"
              v-model="password"
            ></textarea>
          </div> -->
          <div class="form-group inputform">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              id="message"
              type="text"
              placeholder="Enter your message here..."
              style="height: 10rem"
              data-sb-validations="required"
            ></textarea>
          </div>
          <br />
          <br />
        </div>
        <div class="col-md-6 Loginform">
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
          <router-link :to="{ name: 'project' }">
            <button type="submit" class="btn btn-light btnSubmit">
              Confrim
            </button>
          </router-link>
          <br />
          <br />
        </div>
      </div>
    </form>
  </div>

  <br />

  <!-- <form @submit.prevent="onLogin"> -->
</template>

<script>
// import Service from "../services/OneMeasureService.js";
export default {
  name: "create_project",
  //   inject: ["GStore"],
  //   components: {},
  data() {
    return {
      username: "",
      password: "",
      checked: null,
      hide: false,
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
h2 {
  text-align: left;
}
#icon {
  padding-left: 20px;
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
</style>
