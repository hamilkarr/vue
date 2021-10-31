<template>
  <transition name="fade">
    <Modal
      @closeModal="모달창열렸니 = false"
      :원룸들="원룸들"
      :누른거="누른거"
      :모달창열렸니="모달창열렸니"
    />
  </transition>

  <div class="menu">
    <a v-for="i in 메뉴들" :key="i">{{ i }}</a>
  </div>

  <Discount />

  <Card
    @openModal="
      모달창열렸니 = true;
      누른거 = j;
    "
    :원룸="원룸들[j]"
    v-for="(i, j) in 원룸들"
    :key="j"
  />
</template>

<script>
import Card from "./components/Card.vue";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import data from "./assets/oneroom.js";

export default {
  name: "App",
  components: { Discount, Modal, Card },
  data() {
    return {
      오브젝트: { name: "kim", age: 20 },
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      메뉴들: ["Home", "Shop", "About"],
    };
  },
  methods: {},
};
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  widows: 100%;
  height: 300px;
  margin-top: 40px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
