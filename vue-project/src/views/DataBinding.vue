<template>
  <div
    class="container"
    v-bind:class="{ active: isActive, 'text-red': hasError }"
  >
    ClassBinding
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
</script>

