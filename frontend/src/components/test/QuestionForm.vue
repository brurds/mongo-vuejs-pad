<template>
  <div class="p-grid p-fluid">
    <div class="div-flex">
      <div>
        <h1 class="form-title">Formulario de questões</h1>
        <div class="p-grid form-style border ">
          <div class="p-col-12 p-offset">
            <h3>Pergunta</h3>
            <Textarea
              v-model.trim="question.body"
              :autoResize="true"
              rows="5"
              cols="30"
            />
            <p class="error" v-if="validateRequired($v.question.body)">
              {{ msg.required }}
            </p>
          </div>
          <div class="p-col-6">
            <h3>Alternativa A</h3>
            <span class="p-float-label">
              <InputText
                id="answerA"
                type="text"
                v-model.trim="$v.question.answerA.$model"
              />
              <label for="answerA">Digite a resposta A</label>
            </span>
            <p class="error" v-if="validateRequired($v.question.answerA)">
              {{ msg.required }}
            </p>
          </div>
          <div class="p-col-6">
            <h3>Alternativa B</h3>
            <span class="p-float-label">
              <InputText
                id="answerB"
                type="text"
                v-model.trim="$v.question.answerB.$model"
              />
              <label for="answerB">Digite a resposta B</label>
            </span>
            <p class="error" v-if="validateRequired($v.question.answerB)">
              {{ msg.required }}
            </p>
          </div>
          <div class="p-col-6">
            <h3>Alternativa C</h3>
            <span class="p-float-label">
              <InputText
                id="answerC"
                type="text"
                v-model.trim="$v.question.answerC.$model"
              />
              <label for="answerC">Digite a resposta C</label>
            </span>
            <p class="error" v-if="validateRequired($v.question.answerC)">
              {{ msg.required }}
            </p>
          </div>
          <div class="p-col-6">
            <h3>Alternativa D</h3>
            <span class="p-float-label">
              <InputText
                id="answerD"
                type="text"
                v-model.trim="$v.question.answerD.$model"
                v-on:keyup.enter="save"
              />
              <label for="answerD">Digite a resposta D</label>
            </span>
            <p class="error" v-if="validateRequired($v.question.answerD)">
              {{ msg.required }}
            </p>
          </div>
          <div class="p-grid div-flex">
            <div class="p-col-3">
              <Checkbox
                id="city1"
                name="city"
                value="Chicago"
                v-model="cities"
              />
              <label for="city1" class="p-checkbox-label">Chicago</label>
            </div>
            <div class="p-col-3">
              <Checkbox
                id="city2"
                name="city"
                value="Los Angeles"
                v-model="cities"
              />
              <label for="city2" class="p-checkbox-label">Los Angeles</label>
            </div>
            <div class="p-col-3">
              <Checkbox
                id="city3"
                name="city"
                value="New York"
                v-model="cities"
              />
              <label for="city3" class="p-checkbox-label">New York</label>
            </div>
            <div class="p-col-3">
              <Checkbox
                id="city4"
                name="city"
                value="San Francisco"
                v-model="cities"
              />
              <label for="city4" class="p-checkbox-label">San Francisco</label>
            </div>
          </div>
        </div>
        <div class="div-flex">
          <Button
            @click="cleanFields()"
            label="Salvar"
            class="p-button-info p-button-rounded btn-size"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "../../service/Question";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      question: {
        body: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
      },
      msg: {
        required: "*Campo não pode estar vazio",
        minLength: "*Necessario 3 carateres no minimo"
      }
    };
  },
  validations: {
    question: {
      body: {
        required
      },
      answerA: {
        required
      },
      answerB: {
        required
      },
      answerC: {
        required
      },
      answerD: {
        required
      }
    }
  },
  methods: {
    validateRequired(field) {
      return !field.required;
    },
    validadeMinLength(field) {
      return !field.minLength && field.required;
    },
    save() {
      if (this.$v.$invalid) {
        this.$toast.add({
          severity: "error",
          summary: "Cadastro",
          detail: "Erro ao cadastrar, verifique os campos",
          life: 3000
        });
      } else {
        Question.save(this.question)
          .then(res => {
            console.log(res);
            this.$toast.add({
              severity: "success",
              summary: "Cadastro",
              detail: "Cadastro realizado com sucesso",
              life: 3000
            });
            this.cleanFields();
          })
          .catch(() => {
            this.$toast.add({
              severity: "error",
              summary: "Cadastro",
              detail: "Erro ao cadastrar, verifique os campos",
              life: 3000
            });
          });
      }
    },
    cleanFields() {
      this.question.body = "";
      this.question.answerA = "";
      this.question.answerB = "";
      this.question.answerC = "";
      this.question.answerD = "";
    }
  }
};
</script>

<style scoped>
.form-style {
  margin: 10px 10px 10px;
  padding: 10px 10px 10px;
  border: 2px solid black;
  border-radius: 20px;
}
.error {
  color: red;
  font-size: 10px;
}
.div-flex {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.form-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn-size {
  margin: 10px 10px 10px;
  width: 100px;
}
</style>
