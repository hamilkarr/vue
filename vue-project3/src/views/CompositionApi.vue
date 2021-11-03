<template>
  <input type="number" v-model="num1" /> +
  <input type="number" v-model="num2" /> =
  {{ result }}
</template>

<script>
import calculator from "../calculator.js";
export default {
  setup() {
    let { num1, num2, result } = calculator();

    return {
      num1,
      num2,
      result,
    };
  },
};
</script>

<style>
</style>