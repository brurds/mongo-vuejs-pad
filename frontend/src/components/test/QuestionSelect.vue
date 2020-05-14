<template>
  <div class="container">
    <div class="form-width">
      <div>
        <h3 class="form-title">Seleção de questões</h3>
        <DataTable
          :value="question"
          :selection.sync="selectedQuestion"
          data-key="_id"
          :paginator="true"
          :rows="10"
        >
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="employee.name" header="Criado por " headerStyle="width: 120px"></Column>
          <Column field="body" header="body"></Column>
        </DataTable>
      </div>
      <div v-if="selectedQuestion[0] != null" >
        <h3 class="form-title">Prova</h3>
        <div class="div-test">
          <div v-for="(question, index) in selectedQuestion" :key="selectedQuestion._id">
            <TestForm
              :number="index + 1"
              :body="selectedQuestion[index].body"
              :answerA="selectedQuestion[index].answerA"
              :answerB="selectedQuestion[index].answerB"
              :answerC="selectedQuestion[index].answerC"
              :answerD="selectedQuestion[index].answerD"
            />
          </div>
        </div>
      </div>
      <div v-if="selectedQuestion[0] != null">
        <h3 class="form-title">Gabarito</h3>
        <div class="border div-test">
          <div v-for="(question, index) in selectedQuestion" :key="selectedQuestion._id">
            <ResponseTemplate
              :number="index + 1"
              :correctAnswer="selectedQuestion[index].correctAnswer"
            />
          </div>
        </div>
      </div>
    </div>
     <div v-if="selectedQuestion[0] != null" class="div-flex-buttons">
        <div>
        <Button label="Salvar Prova" icon="pi pi-check" @click="save()" class="p-button-success" />
      </div>
     </div>
  </div>
</template>

<script>
import Question from "../../service/Question";
import TestForm from "./TestForm";
import ResponseTemplate from "./ResponseTemplate";
import Test from "../../service/Test";

export default {
  components: {
    TestForm,
    ResponseTemplate
  },
  data() {
    return {
      question: undefined,
      selectedQuestion: [],
      test: {
        questions: []
      }
    };
  },
  mounted() {
    this.listAllQuestion();
  },
  methods: {
    listAllQuestion() {
      Question.listAll()
        .then(res => {
          this.question = res.data;
        })
        .catch(error => console.log(error));
    },
    save() {
      this.test.questions = this.selectedQuestion;
      Test.save(this.test)
        .then(res => {
          this.$toast.add({
            severity: "success",
            summary: "Cadastro",
            detail: "Cadastro realizado com sucesso",
            life: 3000
          });
        })
        .catch(error => {
          console.log(error);
          this.$toast.add({
            severity: "error",
            summary: "Cadastro",
            detail: "Erro ao cadastrar, verifique os campos",
            life: 3000
          });
        });
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

.container .form-width .div-test {
  margin: 10px;
  padding: 10px;
   border: 2px solid black;
  border-radius: 20px;
}

/*Buttons */
.container .div-flex-buttons {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>
