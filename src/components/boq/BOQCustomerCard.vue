<template>
  <div class="card mx-[60px] md:mx-[40px] lg:mx-[20px] mb-10 shadow-xl rounded-lg w-max bg-orange-500" v-if="boq.status==1">
    <router-link
      class="link"
      :to="{ name: 'boq_template_selection', params: { id: boq.id } }"
    >
    <div class="contractor flex flex-row items-center h-[100px] w-[300px] mb-[5px] p-[20px] rounded-lg border-solid border-4 border-orange-500 bg-orange-100">
        <div class="p-[20px] space-x-1 flex">
           <p class="font-bold">BOQ: </p>
            <p class="w-[100px] break-words">{{ boq.BOQ_name }}</p>

        </div>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "boq_cutomer_card",
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
