<template>
  <PageTitle2
    title="부모 컴포넌트 제목1"
    :num1="10"
    :num2="20"
    :checked="true"
    :fruits="['orange', 'banana', 'waterMelon']"
    :posts="posts"
  />
</template>

<script>
import PageTitle2 from "../components/PageTitle2.vue";
export default {
  components: { PageTitle2 },
  data() {
    return {
      posts: {
        author: "작성자3",
        title: "제목3",
      },
    };
  },
};
</script>

<style>
</style>