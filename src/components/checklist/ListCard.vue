<template>
  <div class=" relative h-fit mx-[60px] md:mx-[40px] lg:mx-[20px] rounded-[5px] mb-5 w-max">
    <div class="flex flex-row h-auto pl-[80px] pr-[10px] pt-[20px] pb-[20px] w-[400px] rounded-[5px] border-solid border-[5px] border-orange-400">
        <div class="w-full text-right">
            <div class="absolute left-[20px] top-[25px] font-bold cursor-pointer">
              <label>
                <input 
                  type="checkbox" 
                  class="check accent-orange-500 h-[35px] w-[35px]" 
                  :checked="list.status === 1"
                  @change="changeStatus($event)"
                >
                </label>
            </div>
            <p class="pt-[2px] pl-[10px] pr-[10px] w-full text-xl font-sans font-bold break-words">{{ list.list_name }}</p>
            <hr />
            <p>
              {{ list.list_description }}
            </p>
        </div>
    </div>
  </div>
</template>
<script>
import Service from "../../services/OneMeasureService";
export default {
  inject: ["GStore"],
  name: "list_card",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeStatus(e) {
      Service.check_checkbox(this.list.checkbox_id)
    },
  }
};
</script>

<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #8C8C8C;
  margin: 1em 0;
  padding: 0;
}

.check:hover {
  transform: scale(1.09);
}
</style>
