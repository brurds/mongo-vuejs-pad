<template>
  <div>
    <QuestionForm />

    <Message severity="info" :life="10000" :sticky="false">
      {{messages}}
    </Message>
  </div>
</template>

<script>
import QuestionForm from "../../components/test/QuestionForm";

export default {
  components: {
    QuestionForm
  },
  data() {
    return {
      messages: "Cadastro de questões"
    };
  }
};
</script>

<style scoped></style>
