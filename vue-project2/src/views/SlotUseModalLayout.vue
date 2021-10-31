<template>
  <PageTitle>제목!!!</PageTitle>
  <ModalLayout>
    <template #header>
      <h1>팝업 제목...</h1>
    </template>
    <template #default> 팝업 내용 영역... </template>
    <template #footer>
      <h2>팝업 하단...</h2>
    </template>
  </ModalLayout>
</template>
<script>
import ModalLayout from "./SlotModalLayout.vue";
import PageTitle from "../components/PageTitle2.vue";
export default {
  components: { ModalLayout, PageTitle },
};
</script>