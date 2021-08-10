<template>
  <button type="button" @click="showMessage" ref="btn1">클릭!</button>
  <child-component />
</template>

<script>
import ChildComponent from "../components/childComponent1.vue";
export default {
  components: { ChildComponent },
  mounted() {
    // this.$refs.btn1.click();
  },
  methods: {
    showMessage() {
      alert("클릭!");
    },
  },
};
</script>