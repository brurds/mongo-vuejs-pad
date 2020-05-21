<template>
  <div>
    <form class="p-grid p-fluid form-style">
      <div class="p-col-12">
        <h3>{{ number }}ª Questão</h3>
        <p>{{ body }}</p>
      </div>
      <div class="p-col-12">
        <RadioButton value="A" v-model="result" />
        <label class="p-radiobutton-label">A) {{ answerA }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="B" v-model="result" />
        <label class="p-radiobutton-label">B) {{ answerB }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="C" v-model="result" />
        <label class="p-radiobutton-label">C) {{ answerC }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="D" v-model="result" />
        <label class="p-radiobutton-label">D) {{ answerD }}</label>
      </div>
      <p v-if="result != null">Alternativa Selecionada: {{ result }}</p>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    result:'',
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
