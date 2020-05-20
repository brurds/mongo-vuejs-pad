<template>
  <div>
    <TestDataTable />
    <Message severity="info" >{{
      messages
    }}</Message>
  </div>
</template>

<script>
import TestDataTable from "../../components/test/TestDataTable";

export default {
  components: {
    TestDataTable
  },
  data() {
    return {
      messages: "Para excluir ou enviar e-mail selecione a linha desejada na tabela"
    };
  }
};
</script>

<style></style>
