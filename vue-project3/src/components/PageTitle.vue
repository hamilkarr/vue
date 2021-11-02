<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "기본 제목...",
    },
  },
  inject: ["provideTitle"],
  mounted() {
    console.log("provideTitle", this.provideTitle);
  },
};
</script>