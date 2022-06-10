<template>
  <div class="relative flex justify-center items-center">
    <div
      class="
        max-w-5xl
        bg-white
        shadow-xl
        rounded-lg
        w-[1028px]
        mb-4
        mx-8
        px-10
        py-5
      "
    >
      <NavProject />
      <SearchMaterial />
      <div class="recommend mb-10">
        <FormWrapper label="วัสดุ" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <MaterialTypeCard v-for="x in users" :key="x.id" :user="x" />
        </div>
        
        <div class="flex justify-center items-center">
          <a
            href="#"
            class="
              flex
              items-center
              justify-center
              px-4
              py-2
              mx-1
              text-gray-500
              capitalize
              bg-white
              rounded-md
              cursor-not-allowed
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            href="#"
            class="
              hidden
              px-4
              py-2
              mx-1
              text-gray-500
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              sm:inline
              hover:bg-orange-500 hover:text-white
            "
          >
            1
          </a>

          <a
            href="#"
            class="
              hidden
              px-4
              py-2
              mx-1
              text-gray-500
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              sm:inline
              hover:bg-orange-500 hover:text-white
            "
          >
            2
          </a>

          <a
            href="#"
            class="
              hidden
              px-4
              py-2
              mx-1
              text-gray-500
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              sm:inline
              hover:bg-orange-500 hover:text-white
            "
          >
            ...
          </a>

          <a
            href="#"
            class="
              hidden
              px-4
              py-2
              mx-1
              text-gray-500
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              sm:inline
              hover:bg-orange-500 hover:text-white
            "
          >
            9
          </a>

          <a
            href="#"
            class="
              hidden
              px-4
              py-2
              mx-1
              text-gray-500
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              sm:inline
              hover:bg-orange-500 hover:text-white
            "
          >
            10
          </a>

          <a
            href="#"
            class="
              flex
              items-center
              justify-center
              px-4
              py-2
              mx-1
              text-gray-700
              transition-colors
              duration-200
              transform
              bg-white
              rounded-md
              dark:text-gray-200
              hover:bg-orange-500 hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormWrapper from "@/components/form/FormWrapper";
import MaterialTypeCard from "../../components/pm/MaterialTypeCard.vue";
import SearchMaterial from "../../components/pm/SearchMaterial.vue";
import NavProject from "../../components/NavProject";
export default {
  name: "material_list",
  components: {
    FormWrapper,
    MaterialTypeCard,
    SearchMaterial,
    NavProject
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
      toggle: false,
    };
  },
};
</script>

<style scoped>
span {
  border: 1px solid black;
  padding: 10px 10px;
  margin: 20px 0;
  border-radius: 10px;
}

ul {
  border-left: 1px solid #737373;
  border-radius: 2px;
}

span:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
