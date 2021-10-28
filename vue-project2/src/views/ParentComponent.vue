<template>
  <ChildComponent ref="child_component" />
  <button type="button" ref="button1" @click="msg()">클릭2</button>
  <h1>{{ title }}</h1>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  computed: {
    title() {
      return this.$refs.child_component.msg;
    },
  },
  components: { ChildComponent },
  mounted() {
    // this.$refs.button1.click();
    // this.$refs.child_component.$refs.btn.click();
    // this.$refs.child_component.childMsg();
    this.$refs.child_component.msg = "변경 메세지...";
  },
  methods: {
    msg() {
      alert("클릭!");
    },
  },
};
</script>