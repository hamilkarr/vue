<template>
  <input type="text" v-alert />
  <div v-redFont>폰트색상</div>
</template>
<script>
export default {
  directives: {
    alert: {
      mounted(element) {
        alert("v-alert");
        element.style.border = "1px solid green";
      },
    },
    redFont: {
      mounted(el) {
        el.style.color = "red";
      },
    },
  },
};
</script>