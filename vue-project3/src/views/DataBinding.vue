<template>
  {{ title }} <br />
  <input type="text" v-model="title" />
  <input type="text" v-model.number="num1" />
</template>

<script>
export default {
  name: "컴포넌트 이름(생략)",
  components: {},
  data() {
    return {
      title: "제목",
    };
  },
  computed: {},
  created() {
    console.log("created!");
  },
  mounted() {
    console.log("mounted");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>