<script>
export default {
  inject: ["fruits"],
  mounted() {
    console.log(this.fruits);
  },
};
</script>