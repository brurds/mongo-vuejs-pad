<template>
  <div class="container">
    <div class="form-width">
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
    </div>
  </div>
</template>

<script>
import Test from "../../service/Test";
import TestForm from "../../components/test/TestForm";

export default {
  components: {
    TestForm
  },
  data() {
    return {
        id:'',
        test: []
    };
  },
  mounted() {
    this.id = this.$route.path.substring(6, 30);
    console.log(this.id)
    this.findOneTest();
    
  },
  methods: {
    findOneTest() {
      Test.findOne(this.id)
        .then(res => {
          this.test = res.data.questions;
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
