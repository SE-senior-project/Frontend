<template>
  <div class="contractor">
    <a :href="'admin'">Approval Account</a>
    | <a :href="'manage_account'">Manage Account</a>
  </div>
  <div class="container">
    <div class="updateForm">
      <br />
      <h2>Update data</h2>
      <form>
        <br />
        <div class="form-group inputform">
          <label for="exampleInputPassword1">
            <h5>Select Month/Year</h5>
          </label>
          <input class="form-control" type="month" />
        </div>
        <br />
        <button type="submit" class="btn btn-light btnSubmit">
          Sign In <font-awesome-icon icon="sign-in-alt" id="icon" />
        </button>
        <div class="form-group Signup"></div>
      </form>
    </div>
  </div>
  <div>
    <h5>Contractors</h5>
    <div class="contractor">
      <ContactorCard v-for="x in users" :key="x.id" :user="x" />
    </div>
  </div>
  <br />
  <div>
    <h5>New Account</h5>
    <div class="contractor">
      <NewAccountCard v-for="x in users" :key="x.id" :user="x" />
    </div>
  </div>
</template>
<script>
import ContactorCard from "../../components/ContactorCard.vue";
import NewAccountCard from "../../components/NewAccountCard.vue";
export default {
  name: "OMadmin",
  components: {
    ContactorCard,
    NewAccountCard,
  },
  data() {
    return {
      users: [
        {
          name: "Thitisan",
          id: 1,
        },
        {
          name: "Phonmongkhon",
          id: 2,
        },
        {
          name: "Pasakon",
          id: 3,
        },
        {
          name: "Sahachan",
          id: 4,
        },
        {
          name: "Khemata",
          id: 5,
        },
      ],
    };
  },
  methods: {
    nextPage() {
      this.$router.push("/manage_account");
    },
  },
};
</script>

<style scoped></style>
