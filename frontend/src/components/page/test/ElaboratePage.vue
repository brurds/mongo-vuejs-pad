<template>
  <div class="card card-w-title">
    <ElaborateTest />

    <Message severity="info" :life="10000" :sticky="false">
      {{ messages}}
    </Message>
  </div>
</template>

<script>
import ElaborateTest from "../../../components/test/QuestionSelect";

export default {
  components: {
    ElaborateTest
  },

  data() {
    return {
      messages: "Elaboração de Prova"
    };
  }
};
</script>

<style></style>
