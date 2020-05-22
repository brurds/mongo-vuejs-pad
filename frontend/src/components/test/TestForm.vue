<template>
  <div>
    <form class="p-grid p-fluid form-style">
      <div class="p-col-12">
        <h3>{{ number }}ª Questão</h3>
        <p>{{ body }}</p>
      </div>
      <div class="p-col-12">
        <RadioButton value="a" v-model="result" @change="emitToParent"/>
        <label class="p-radiobutton-label">A) {{ answerA }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="b" v-model="result" @change="emitToParent" />
        <label class="p-radiobutton-label">B) {{ answerB }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="c" v-model="result" @change="emitToParent" />
        <label class="p-radiobutton-label">C) {{ answerC }}</label>
      </div>
      <div class="p-col-12">
        <RadioButton value="d" v-model="result" @change="emitToParent" />
        <label class="p-radiobutton-label">D) {{ answerD }}</label>
      </div>
      <p v-if="result != null">Alternativa Selecionada: {{ result }}</p>
    </form>
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
  },
  data() {
    return {
      result:''
    }
  },
  methods: {
    emitToParent(event){
      this.$emit('childToParent',{ result:this.result,number:this.number } );
      console.log('enviado '+ this.result);
    }
  },
};
</script>

<style></style>
