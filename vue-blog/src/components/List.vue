<template>
  <!-- <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div> -->
  <div :key="i" v-for="(블로그글내용, i) in 블로그글">
    <h5>{{ 블로그글내용.title }}</h5>
    <p>{{ 블로그글내용.date }}</p>
  </div>
</template>

<script>
export default {
  props: {
    블로그글: Array,
  },
};
</script>

<style>
</style>