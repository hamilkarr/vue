import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // 공통 변수
      count: 0,
    };
  },
  mutations: {
    increase(state) {
      state.count++;
      console.log(state.count);
    },
  },
});

export default store;
