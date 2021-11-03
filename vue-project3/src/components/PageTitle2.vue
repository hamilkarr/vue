<template>
  <h2>{{ title }}</h2>
  <h2>{{ posts.author }} {{ posts.title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "기본 제목.....",
    },
    num1: {
      type: Number,
      default: 0,
    },
    num2: {
      type: Number,
      default: 0,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    fruits: {
      type: Array,
      default: function () {
        return ["apple", "orange", "melon"];
      },
    },
    posts: {
      type: Object,
      default() {
        return { author: "작성자", title: "제목" };
      },
    },
  },
  mounted() {
    console.log(this.fruits instanceof Array);
    console.log(this.fruits);
  },
};
</script>

<style>
</style>