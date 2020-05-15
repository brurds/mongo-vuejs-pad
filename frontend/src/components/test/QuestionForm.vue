<template>
  <div class="container">
    <form class="form-width">
      <h1 class="form-title">Formulário de questões</h1>
      <div class="p-grid p-fluid form-style border">
        <div>
          <h3>Selecione o responsável</h3>
          <Dropdown
            v-model="selectedEmployee"
            :options="employee"
            optionLabel="name"
            placeholder="Selecione o colaborador"
          />
        </div>
        <div class="p-col-12">
          <h3>Pergunta</h3>
          <Textarea v-model.trim="question.body" :autoResize="true" rows="5" cols="30"/>
          <p class="error" v-if="validateRequired($v.question.body)">{{ msg.required }}</p>
        </div>
        <div class="p-lg-6 p-col-12">
          <h3>Alternativa A</h3>
          <span class="p-float-label">
            <InputText id="answerA" type="text" v-model.trim="$v.question.answerA.$model"/>
            <label for="answerA">Digite a resposta A</label>
          </span>
          <p class="error" v-if="validateRequired($v.question.answerA)">{{ msg.required }}</p>
        </div>
        <div class="p-lg-6 p-col-12">
          <h3>Alternativa B</h3>
          <span class="p-float-label">
            <InputText id="answerB" type="text" v-model.trim="$v.question.answerB.$model"/>
            <label for="answerB">Digite a resposta B</label>
          </span>
          <p class="error" v-if="validateRequired($v.question.answerB)">{{ msg.required }}</p>
        </div>
        <div class="p-lg-6 p-col-12">
          <h3>Alternativa C</h3>
          <span class="p-float-label">
            <InputText id="answerC" type="text" v-model.trim="$v.question.answerC.$model"/>
            <label for="answerC">Digite a resposta C</label>
          </span>
          <p class="error" v-if="validateRequired($v.question.answerC)">{{ msg.required }}</p>
        </div>
        <div class="p-lg-6 p-col-12">
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
          <p class="error" v-if="validateRequired($v.question.answerD)">{{ msg.required }}</p>
        </div>
        <div class="p-grid">
          <h3 class="p-col-12">Selecione alternativa correta</h3>
          <div class="p-col-12 p-md-6 p-lg-3">
            <RadioButton
              id="answerA"
              name="answer"
              value="answerA"
              v-model.trim="$v.question.correctAnswer.$model"
            />
            <label for="answerA" class="p-radiobutton-label">Alternativa A</label>
          </div>
          <div class="p-col-12 p-md-6 p-lg-3">
            <RadioButton
              id="answerB"
              name="answer"
              value="answerB"
              v-model.trim="$v.question.correctAnswer.$model"
            />
            <label for="answerB" class="p-radiobutton-label">Alternativa B</label>
          </div>
          <div class="p-col-12 p-md-6 p-lg-3">
            <RadioButton
              id="answerC"
              name="answer"
              value="answerC"
              v-model.trim="$v.question.correctAnswer.$model"
            />
            <label for="answerC" class="p-radiobutton-label">Alternativa C</label>
          </div>
          <div class="p-col-12 p-md-6 p-lg-3">
            <RadioButton
              id="answerD"
              name="answer"
              value="answerD"
              v-model.trim="$v.question.correctAnswer.$model"
            />
            <label for="answerD" class="p-radiobutton-label">Alternativa D</label>
          </div>
          <p
            class="error"
            style="margin-left:10px;"
            v-if="validateRequired($v.question.correctAnswer)"
          >{{ msg.requiredaAnswer }}</p>
        </div>
      </div>
    </form>
    <div class="div-flex-buttons">
      <div>
        <Button
          @click="cancelar()"
          label="Cancelar"
          class="p-button-info p-button-rounded btn-size"
        />
        <Button @click="save()" label="Salvar" class="p-button-info p-button-rounded"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Employee from "../../service/Employee";
  import Question from "../../service/Question";
  import {required} from "vuelidate/lib/validators";

  export default {
    data() {
      return {
        employee: undefined,
        selectedEmployee: undefined,
        question: {
          employee: {},
          body: "",
          answerA: "",
          answerB: "",
          answerC: "",
          answerD: "",
          correctAnswer: ""
        },
        msg: {
          required: "*Campo não pode estar vazio",
          requiredaAnswer: "*Necessario declarar resposta correta"
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
        },
        correctAnswer: {
          required
        }
      }
    },
    mounted() {
      this.listAllEmployee();
    },
    methods: {
      listAllEmployee() {
        Employee.listAll()
          .then(res => {
            this.employee = res.data;
          })
          .catch(error => console.log(error));
      },
      validateRequired(field) {
        return !field.required;
      },
      validadeMinLength(field) {
        return !field.minLength && field.required;
      },
      selectedEmployeeFull() {
        this.question.employee = this.selectedEmployee;
      },
      save() {
        this.selectedEmployeeFull();
        if (this.$v.$invalid) {
          this.$toast.add({
            severity: "error",
            summary: "Cadastro",
            detail: "Erro ao cadastrar, verifique os campos",
            life: 3000
          });
        } else {
          this.selectedEmployeeFull();
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
        this.question.correctAnswer = "";
      }
    }
  };
</script>

<style scoped>
  /*Container */
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }

  /*Form width*/
  .container .form-width {
    width: 80%;
  }

  .container .form-width .form-title {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .container .form-style {
    margin: 10px 10px 10px;
    padding: 10px 10px 10px;
  }

  .container .border {
    border: 2px solid black;
    border-radius: 20px;
  }

  .container .error {
    color: red;
    font-size: 10px;
  }

  /*Buttons */
  .container .div-flex-buttons {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  button {
    margin: 10px 10px 10px;
    width: 100px;
  }
</style>
