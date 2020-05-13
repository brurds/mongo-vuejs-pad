<template>
  <div>
    <div class="p-grid p-fluid form-style">
      <div class="p-col-12">
        <h3>{{number}}ª Questão</h3>
        <p>{{body}}</p>
      </div>
      <div class="p-col-12">
        <RadioButton id="answerA" name="answerA" value />
        <label for="answerA" class="p-radiobutton-label">{{answerA}}</label>
      </div>
      <div class="p-col-12">
        <RadioButton id="answerB" name="answerB" value />
        <label for="answerB" class="p-radiobutton-label">{{answerB}}</label>
      </div>
      <div class="p-col-12">
        <RadioButton id="answerC" name="answerC" value />
        <label for="answerC" class="p-radiobutton-label">{{answerC}}</label>
      </div>
      <div class="p-col-12">
        <RadioButton id="answerD" name="answerD" value />
        <label for="answerD" class="p-radiobutton-label">{{answerD}}</label>
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
    body: {
      type: String,
      required: true
    },
    answerA: {
      type: String,
      required: true
    },
    answerB: {
      type: String,
      required: true
    },
    answerC: {
      type: String,
      required: true
    },
    answerD: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
