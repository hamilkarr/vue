/** 회원 model */
export default {
  data() {
    return {
      requestURL: this.$store.state.apiURL + "/member",
    };
  },
  methods: {
    async $join(data) {
      const result = await this.$request(this.requestURL, data, "POST");
      return result;
    },

    $update(data) {
      console.log(data);
    },
  },
};
