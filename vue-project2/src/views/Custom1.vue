<template>
  <input type="text" v-focus v-style="customStyle" />
  <div v-msg="message"></div>
</template>

<script>
export default {
  data() {
    return {
      customStyle: {
        color: "red",
        background: "black",
      },
      message: {},
    };
  },
  directives: {
    focus: {
      mounted: function (el) {
        console.log("v-focus");
        el.focus();
      },
    },
    style: {
      mounted(el, bindings) {
        console.log(bindings);
        el.style.color = bindings.value.color;
        el.style.bindings = bindings.value.background;
      },
    },
  },
};
</script>

<style>
</style>