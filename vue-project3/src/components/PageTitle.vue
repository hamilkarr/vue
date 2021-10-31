<template>
  <h2>{{ likes }}</h2>
</template>
<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 10,
    },
  },
};
</script>