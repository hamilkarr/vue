<template>
  <h1>Count: {{ count }}</h1>
  <button @click="up">증가</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    up() {
      this.$store.commit("increase");
    },
  },
};
</script>
