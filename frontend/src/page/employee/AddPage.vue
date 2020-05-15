<template>
  <div>
    <EmployeeForm />

    <Message severity="info" :life="10000" :sticky="false">
      {{ messages }}
    </Message>
  </div>
</template>

<script>
import EmployeeForm from "../../components/employees/EmployeeForm";

export default {
  components: {
    EmployeeForm
  },
  data() {
    return {
      messages: "Cadastro de Colaboradores"
    };
  }
};
</script>

<style></style>
