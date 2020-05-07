<template>
  <div>
    <div>
      <div class="card card-w-title"></div>
      <div>
        <ElaborateTest />
      </div>
      <div>
        <Message severity="info" :life="10000" :sticky="false">{{
          messages
        }}</Message>
      </div>
    </div>
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
