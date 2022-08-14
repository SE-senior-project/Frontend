<template>
  <div 
    class="card h-fit mx-[60px] md:mx-[40px] lg:mx-[20px] rounded-[5px] mb-10 w-max bg-orange-400 hover:bg-orange-500" v-if="boq.status==1">
    <router-link
      class="link"
      :to="{ name: 'show_template', params: { id: boq.id } }"
    >
    <div class="flex flex-row h-auto pl-[30px] pt-[20px] pb-[90px] w-[300px] shadow-xl rounded-[5px]">
        <div class="w-full">
           <p class="text-xs">แบบลูกค้า: </p>
            <p class="pt-[2px] pl-[10px] pr-[40px] w-full text-2xl font-sans font-bold break-words">{{ boq.BOQ_name }}</p>
        </div>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "boq_customer_card",
  props: {
    boq: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
}
</style>
