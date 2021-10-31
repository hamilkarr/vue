<template>//</template>
<script>
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      console.log("Mounted");
    });
    onUnmounted(() => console.log("Unmounted"));
  },
};
</script>