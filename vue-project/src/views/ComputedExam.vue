<template>
  <h1>{{ fullName }}</h1>
  <button type="button"></button>
</template>

<script>
export default {
  data() {
    return {
      firstName: "AnNyung",
      lastName: "Hee",
    };
  },
  computed: {
    fullName() {},
  },
};
</script>