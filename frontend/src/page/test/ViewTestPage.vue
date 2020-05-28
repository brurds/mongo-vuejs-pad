<template>
  <div class="container">
    <div class="form-width">
      <h3>Olá {{ employee.name }}</h3>
      <div class="div-test">
        <div v-for="(question, index) in test" :key="index">
          <TestForm
            :number="index + 1"
            :body="test[index].body"
            :answerA="test[index].answerA"
            :answerB="test[index].answerB"
            :answerC="test[index].answerC"
            :answerD="test[index].answerD"
            v-on:childToParent="addItem"
          />
        </div>
      </div>
      <div class="div-flex-buttons">
        <Button
          :disabled="false"
          label="Finalizar prova"
          icon="pi pi-check"
          @click="save()"
          class="p-button-success"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import Test from "../../service/Test";
import Employee from "../../service/Employee";
import TestForm from "../../components/test/TestForm";

export default {
  components: {
    TestForm
  },
  data() {
    return {
      idTest: "",
      idEmployee: "",
      employee: {},
      test: [],
      localResult: [],
      employeeAnswer:[]
    };
  },
  mounted() {
    this.idTest = this.$route.path.substring(6, 30);
    this.idEmployee = this.$route.path.substring(31, 55);
    this.findOneTest();
    this.findOneEmployee();
  },
  methods: {
    save(){
      console.log('save');
    },
    addItem(value) {
      this.$set(this.localResult, value.number - 1, value.result);
    },
    findOneTest() {
      Test.findOne(this.idTest)
        .then(res => {
          this.test = res.data.questions;
          this.localResult = Array(res.data.questions.length);
          this.employeeAnswer = Array(res.data.questions.length);
        })
        .catch(error => console.log(error));
    },
    findOneEmployee() {
      Employee.findOne(this.idEmployee)
        .then(res => {
          this.employee = res.data;
        })
        .catch(error => console.log(error));
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
.container .div-test {
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;
}
.container .div-flex-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
