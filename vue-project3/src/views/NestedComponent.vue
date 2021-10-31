<template>
  <div>
    <PageTitle :likes="likes" />
    <page-title :likes="44" />
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return { likes: 10 };
  },
};
</script>