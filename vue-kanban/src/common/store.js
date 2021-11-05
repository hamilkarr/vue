import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      apiURL: "http://localhost:3000",
      member: {}, //로그인 회원 정보
    };
  },
  mutations: {
    setMember(state, member) {
      // console.log(member);
      state.member = member;
    },
  },
});

export default store;
