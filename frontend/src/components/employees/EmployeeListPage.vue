<template>
  <div>
    <div>
      <div class="card card-w-title"></div>
      <div>
        <EmployeeDataTable />
      </div>
      <div>
        <Message severity="info" :life="10000" :sticky="false">{{messages}}</Message>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeDataTable from "./EmployeeDataTable";
import Employee from "../../service/employee";

export default {
  components: {
    EmployeeDataTable
  },

  data() {
    return {
      messages: 'Para alterar ou excluir selecione a linha desejada na tabela'
    };
  }
  
};
</script>

<style>
</style>
