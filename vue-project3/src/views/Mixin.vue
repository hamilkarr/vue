<script>
import mixin from "../assets/mixin";
export default {
  mixins: [mixin],
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
    // const result = this.$sum(10, 20);
    // console.log(result);
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>