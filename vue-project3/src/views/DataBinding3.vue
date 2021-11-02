<template>
  <div style="margin: 5px">
    <input type="text" v-model="textValue" /><br />
    <input type="number" v-model="numberValue" /><br />
    <input type="password" v-model="passwordValue" /><br />

    <input type="text" v-model.number="num1" @keyup="sumValue" /> +
    <input type="text" v-model.number="num2" @keyup="sumValue" /> =
    {{ result }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue: "textValue",
      numberValue: 20,
      passwordValue: "123456",
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {
    sumValue() {
      this.result = this.num1 + this.num2;
    },
  },
};
</script>

<style>
</style>