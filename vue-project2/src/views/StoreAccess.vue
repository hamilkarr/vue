<template>
  <h1>count: {{ count }}</h1>
  <button @click="increment">증가</button>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$store.state.count);
  },
  methods: {
    increment() {
      this.$store.state.count++;
    },
  },
};
</script>