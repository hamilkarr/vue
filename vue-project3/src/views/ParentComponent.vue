<template>
  <ChildComponent ref="child_component" @send-data="recieveData" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: { ChildComponent },
  mounted() {
    // const btn = this.$refs.button1;
    // btn.style.backgroundColor = "red";
    // const child = this.$refs.child_component;
    // const btn = child.$refs.child_btn;
    // btn.click;
  },
  methods: {
    recieveData(data) {
      console.log("data: ", data);
    },
  },
};
</script>

<style>
</style>