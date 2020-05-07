<template>
  <div>
    <div>
      <div>
        <QuestionForm />
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
import QuestionForm from "../../test/QuestionForm";

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
