<template>
  <h1>v-if</h1>
  <h2 v-if="type == 'A'">A</h2>
  <h2 v-else-if="type == 'B'">B</h2>
  <h2 v-else>C</h2>
  <br /><br />
  <h1>v-show</h1>
  <h2 v-show="type == 'A'">A</h2>
  <h2 v-show="type == 'B'">B</h2>
  <h2 v-show="type == 'C'">C</h2>
</template>

<script>
export default {
  data() {
    return {
      type: "B",
    };
  },
};
</script>

<style>
</style>