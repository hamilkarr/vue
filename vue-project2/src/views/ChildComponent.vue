<template>
  <button type="button" ref="btn" @click="childMsg()">자식클릭!</button>
  <input type="text" v-model="msg" />
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    childMsg() {
      alert("자식컴포넌트에서 클릭클릭!");
    },
  },
};
</script>