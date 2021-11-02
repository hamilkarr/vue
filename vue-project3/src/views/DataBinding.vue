<template>
  {{ title }} <br />
  <PageTitle v-bind:title="title" />
  <button @click="msg">클릭</button>
  <br />
  <input type="number" v-model="num1" /> +
  <input type="number" v-model="num2" /> =
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import mixinex from "../mixinex.js";
export default {
  mixins: [mixinex],
  name: "컴포넌트 이름(생략)",
  components: { PageTitle },
  data() {
    return {
      title: "제목(data)",
      num1: 0,
      num2: 0,
    };
  },
  computed: {
    result() {
      return this.num1 + this.num2;
    },
  },
  provide() {
    return {
      provideTitle: "제목(Provide)",
    };
  },
  created() {
    console.log("created!");
  },
  mounted() {
    console.log("mounted");
    const result = this.$sum(10, 20);
    console.log("result: ", result);
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    msg() {
      alert("알람");
    },
  },
};
</script>

<style>
</style>