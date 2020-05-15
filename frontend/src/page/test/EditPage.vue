<template>
  
    <div>
      <div class="card card-w-title"></div>
      <div>
        <QuestionDataTable />
      </div>
      <div>
        <Message severity="info" :life="10000" :sticky="false">{{messages}}</Message>
      </div>
    </div>
  
</template>

<script>
import QuestionDataTable from "../../components/test/QuestionDataTable";

export default {
  components: {
    QuestionDataTable
  },

  data() {
    return {
      messages: 'Para alterar ou excluir selecione a linha desejada na tabela'
    };
  }
  
};
</script>

<style >
</style>
