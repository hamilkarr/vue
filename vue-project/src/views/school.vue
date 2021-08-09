<template>
  <h1>School.vue</h1>
  <h2 @click="changeTitle">{{ title }}</h2>
  <Scooltitle />
</template>

<script>
import SchoolTitle from "../components/SchoolTilte.vue"
export default {
  compnents :{SchoolTitle},
  data() {
    return {
      title : "학교 홈페이지"
    }
  },
  created() {
    console.log("Created");
  },
  mounted() {
    console.log("Mounted");
  },
  unmounted() { 
    console.log("Unmounted");
  },
  methods : {
    changeTitle(){
      this.changeTitle2();
    },
    changeTitle2() {
      this.title = "(변경)학교 홈페이지";
    }
  }
}
</script>