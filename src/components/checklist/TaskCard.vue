<template>
  <div class="card relative h-fit mx-[60px] md:mx-[40px] lg:mx-[20px] rounded-[5px] mb-5 w-max">
    <div class="flex flex-row h-auto pl-[30px] pr-[10px] pt-[20px] pb-[20px] w-[600px] shadow-xl rounded-[5px] border-solid border-[3px] border-orange-500">
        <div class="w-full">
            <div @click="selectInTask(task.task_id)" class="absolute right-[15px] top-[12px] cursor-pointer">
                <img 
                class="arrow h-[50px] pl-[15px] p-[5px]"
                src="../../assets/full-moon.png"
                />
            </div>
            <p class="pt-[2px] pl-[10px] pr-[40px] w-full text-xl font-sans font-bold break-words">{{ task.checklist_name }}</p>
        </div>
    </div>
  </div>
  <div class="list flex flex-col items-end" v-if="GStore.SH === task.task_id">
            <ListCard v-for="x in GStore.allList" :key="x.id" :list="x"/>
  </div>
</template>
<script>
import Service from "../../services/OneMeasureService";
import ListCard from "../../components/checklist/ListCard.vue";
export default {
  inject: ["GStore"],
  name: "task_card",
  components: {
    ListCard
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: null,
    };
  },
  methods: {
    async selectInTask(selectedTask) {
      console.log(this.GStore.SH);
      const allList = await Service.get_list(selectedTask)
      this.GStore.allList = allList.data
      if(this.GStore.SH == this.task.task_id && this.toggle == 1){
        this.GStore.allList = null;
        this.toggle = 0;
        return
      }
      this.GStore.SH = selectedTask;
      console.log(this.toggle + "yoyo");
      this.toggle = 1;
    },
  }
};
</script>

<style scoped>
.card:hover {
  background-color: #f2f2f2;
}

.arrow:hover {
  transform: scale(1.2);
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #8C8C8C;
  margin: 1em 0;
  padding: 0;
}

</style>
