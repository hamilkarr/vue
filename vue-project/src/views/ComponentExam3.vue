<template>
  <SchoolTitle :title="titletext" :num="num" />
  <school-title v-bind="schoolData" />
</template>

<script>
import SchoolTitle from "../components/SchoolTitle2.vue";
export default {
  components: { SchoolTitle },
  data() {
    return {
      titletext: "변경된 제목",
    };
  },
};
</script>