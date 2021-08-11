import { reactive, computed, toRefs } from "vue";
const sumNums = () => {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => Number(state.num1) + Number(state.num2)),
  });

  return toRefs(state);
};

export { sumNums };
