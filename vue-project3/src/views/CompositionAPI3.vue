<template>
  <ChildComponent />
</template>

<script>
import { onMounted, onUnmounted, provide } from "vue";
import ChildComponent from "./ChildComponent4.vue";
export default {
  components: { ChildComponent },
  created() {
    console.log("Created");
  },

  setup() {
    provide("title", "제목!...");
    onMounted(() => {
      console.log("Mounted!");
    });
    onUnmounted(() => {
      console.log("UnMounted!");
    });
  },
};
</script>

<style>
</style>