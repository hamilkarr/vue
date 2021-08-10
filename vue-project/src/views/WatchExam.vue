<template>
  <h1>{{ fullName }}</h1>
  <button type="button" @click="changeFirstName">이름변경</button>
</template>

<script>
export default {
  data() {
    return {
      firstName: "baba",
      lastName: "Yetoo",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
  methods: {
    changeFirstName() {
      this.firstName = "binguni";
    },
  },
};
</script>