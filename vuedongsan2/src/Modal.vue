<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" class="room-img" />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <input v-model="month" />
      <p>{{ month }} 개월 선택함 : {{ 원룸들[누른거].price * month }}원</p>
      <button @click="$emit('closeModal')">닫기</button>
      <Discount />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month(a) {
      if (a >= 13 || typeof a != Number) {
        alert("13이상 입력하지 마셈");
      }
    },
  },
  beforeUpdate() {
    if (this.month <= 2) {
      alert("3달 이상부터 팝니다.");
    }
  },
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style>
</style>