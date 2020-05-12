<template>
  <div class="div-flex">
    <div class="flex">
      <div>
        <h3 class="form-title">Seleção de questões</h3>
        <DataTable
          :value="question"
          :selection.sync="selectedQuestion"
          dataKey="_id"
          :paginator="true"
          :rows="10"
        >
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column
            class="overflow"
            field="employee.name"
            header="Criado por "
            headerStyle="width: 120px"
          ></Column>
          <Column class="overflow" field="body" header="body"></Column>
        </DataTable>
      </div>
      <div v-if="selectedQuestion[0] != null">
        <h3 class="form-title">Prova</h3>
        <div class="border">
          <div
            v-for="(question, index) in selectedQuestion"
            :key="selectedQuestion._id"
          >
            <TestForm
              :number="index + 1"
              :body="selectedQuestion.body"
              :answerA="selectedQuestion.answerA"
              :answerB="selectedQuestion.answerB"
              :answerC="selectedQuestion.answerC"
              :answerD="selectedQuestion.answerD"
              :correctAnswer="selectedQuestion.CorrectAnswer"
            />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "../../service/Question";
import TestForm from "./Testform";
export default {
  components: {
    TestForm
  },
  data() {
    return {
      question: undefined,
      selectedQuestion: []
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
    }
  }
};
</script>

<style>
.div-flex {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.flex {
  width: 80%;
}
.form-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.form-style {
  margin: 10px 10px 10px;
  padding: 10px 10px 10px;
}
.border {
  border: 2px solid black;
  border-radius: 20px;
}
.overflow {
  overflow: hidden;
}
</style>
