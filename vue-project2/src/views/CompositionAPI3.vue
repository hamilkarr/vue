<template>##</template>
<script>
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMounted");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUnmount() {
    console.log("beforeUnmounted");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>