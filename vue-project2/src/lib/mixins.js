const commonLib = {
  created() {
    console.log("mixin created!");
  },
  mounted() {
    console.log("mixin mounted!");
  },
  unmounted() {
    console.log("mixin unMounted!");
  },
  methods: {},
};
export default commonLib;
