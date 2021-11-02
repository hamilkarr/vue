<template>
  {{ htmlString }}
  <div v-html="htmlString"></div>
  <select>
    <option value="인천"></option>
    <option value="서울"></option>
    <option value=""></option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      htmlString: "<p style='color: red;'>HTML으로 작성한 문장</p>",
    };
  },
};
</script>

<style>
</style>