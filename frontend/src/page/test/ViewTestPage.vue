<template>
  <div class="container">
    <div class="form-width">
      <h3>Olá {{employee.name}}</h3>
      <div class="div-test">
        <div v-for="(question, index) in test" :key="test._id">
            <TestForm
               :number="index + 1"
            :body="test[index].body"
            :answerA="test[index].answerA"
            :answerB="test[index].answerB"
            :answerC="test[index].answerC"
            :answerD="test[index].answerD"
            />
        </div>
        
      </div>
      {{employee}}
    </div>
  </div>
</template>

<script>
import Test from "../../service/Test";
import TestForm from "../../components/test/TestForm";
import Employee from "../../service/Employee";

export default {
  components: {
    TestForm
  },

  data() {
    return {
        idTest:'',
        idEmployee:'',
        test: [],
        employee:undefined
    };
  },

  mounted() {
    this.idTest = this.$route.path.substring(6, 30);
    this.idEmployee = this.$route.path.substring(31, 55);
    this.findOneTest();
    this.findOneEmployee();  
  },

  methods: {
    findOneTest() {
      Test.findOne(this.idTest)
        .then(res => {
          this.test = res.data.questions;
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
</style>
