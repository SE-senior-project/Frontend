<template>
  <div class="contractor">
    <a :href="'admin'">Approval Account</a>
    | <a :href="'manage_account'">Manage Account</a>
  </div>
  <div>
    <h5>Contractors</h5>
    <div class="contractor">
      <ContactorCard v-for="x in users" :key="x.id" :user="x" />
    </div>
  </div>
</template>
<script>
import ContactorCard from "../components/ContactorCard.vue";
export default {
  name: "manage_account",
  components: {
    ContactorCard,
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
};
</script>

<style scoped></style>
