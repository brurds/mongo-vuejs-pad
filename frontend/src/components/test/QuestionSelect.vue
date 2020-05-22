<template>
  <div class="container">
    <div class="form-width">
      <div>
        <h3 class="form-title">Seleção de questões</h3>
        <div>
          <p>Selecione o responsável</p>
          <Dropdown
            v-model="selectedEmployee"
            :options="employee"
            optionLabel="name"
            placeholder="Selecione o colaborador"
          />
        </div>
        <p v-if="valid" class="error">Necessário selecionar um responsável</p>
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
          <div v-for="(question, index) in selectedQuestion" :key="index">
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
          <div v-for="(question, index) in selectedQuestion" :key="index">
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
        <Button :disabled="valid" label="Salvar Prova" icon="pi pi-check" @click="save()" class="p-button-success" />
        
      </div>
     </div>
  </div>
</template>

<script>
import Question from "../../service/Question";
import TestForm from "./TestForm";
import ResponseTemplate from "./ResponseTemplate";
import Test from "../../service/Test";
import Employee from "../../service/Employee";

export default {
  components: {
    TestForm,
    ResponseTemplate
  },
  data() {
    return {
      valid:true,
      employee:undefined,
      selectedEmployee:undefined,
      question: undefined,
      selectedQuestion: [],
      test: {
        name:'',
        questions: []
      }
    };
  },
  mounted() {
    this.listAllQuestion();
    this.listAllEmployee();
  },
  watch: {
    selectedEmployee(newValue){
      this.valid = false;
    }
  },
  methods: {  
    listAllQuestion() {
      Question.listAll()
        .then(res => {
          this.question = res.data;
        })
        .catch(error => console.log(error));
    },
    listAllEmployee() {
      Employee.listAll()
        .then(res => {
          this.employee = res.data;
        })
        .catch(error => console.log(error));
    },
    save() {
      this.test.name = this.selectedEmployee.name;
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
.error {
  color: red;
  font-size: 10px;
}
</style>
