<template>
  <div>
    <img :src="원룸.image" class="room-img" />
    <!-- @click="모달창열렸니 = true;누른거 = j;" -->
    <h4 @click="$emit('openModal', 원룸.id)">{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    원룸: Object,
    누른거: Number,
    모달창열렸니: Boolean,
  },
  methods: {},
};
</script>

<style>
</style>