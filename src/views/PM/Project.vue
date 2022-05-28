<template>
  <br />

  <div class="wrapper">
    <ul class="my-row">
      <li><div class="OnemeasurePM">Project Onemeasure</div></li>
      <li></li>
      <li>
        <div class="buttonPM">
          <button type="submit" class="btn btn-light btnSubmit">
            <router-link id="createnewbutt" :to="{ name: 'create_project' }">
              <b>Create New Project</b></router-link
            >
          </button>
        </div>
      </li>
    </ul>
    <br />
    <ul class="my-row">
      <li>
        <ProjectCard v-for="x in users" :key="x.id" :user="x" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProjectCard from "../../components/pm/ProjectCard.vue";
export default {
  name: "OMprojectmanagement",
  components: {
    ProjectCard,
  },
  data() {
    return {
      users: [
        {
          name: "thitisan",
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
<style scoped>
li {
  text-decoration: none;
  position: relative;
}
ul.my-row {
  display: table;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  position: relative;
}

ul.my-row > li {
  display: table-cell;
}
#createnewbutt {
  text-decoration: none;
  color: black;
}
.buttonPM {
  text-align: right;
  padding-right: 50px;
}
.btnSubmit {
  color: #282726;
  background-color: #fff;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
}
.btnSubmit:hover {
  box-shadow: 0 5px 8px 0 rgba(245, 103, 1, 0.2),
    0 9px 26px 0 rgba(245, 103, 1, 0.19);
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}

.OnemeasurePM {
  margin: 0 auto;
  height: 50px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: left;
  padding-left: 50px;
}
@media screen and (max-width: 800px) {
  .OnemeasurePM {
    padding-top: 50px;
  }
}
</style>
