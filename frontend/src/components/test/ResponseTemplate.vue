<template>
  <div>
    <div class="p-grid p-fluid form-style">
      <div class="p-col-12">
        <h3>{{ number }}ª Questão</h3>
      </div>
      <div class="p-col-12">
        <RadioButton id="correctAnswer" name="correctAnswer" value="" />
        <label for="correctAnswer" class="p-radiobutton-label"
          >Alternativa {{ correctAnswer.substring(6, 7) }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    correctAnswer: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
