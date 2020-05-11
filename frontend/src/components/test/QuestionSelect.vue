<template>
  <div>
    <PickList v-model="question" listStyle="height:342px" dataKey="{{question._id}}">
      <template #sourceHeader>
        Questões
      </template>
      <template #targetHeader>
        Prova
      </template>
      <template #item="question">
        <div class="item">
          <div>{{ question.item._id }}</div>
        </div>
      </template>
    </PickList>
  </div>
</template>

<script>
import Question from "../../service/Question";
export default {
  data() {
    return {
      question: undefined
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
  }
};
</script>

<style></style>
