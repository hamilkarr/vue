<template>
  <h1>{{ msg }}</h1>
  <child-component @send-message="receiveData" />
</template>
<script>
import ChildComponent from "./ChildComponent3.vue";
export default {
  components: { ChildComponent },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    receiveData(data) {
      this.msg = data;
    },
  },
};
</script>