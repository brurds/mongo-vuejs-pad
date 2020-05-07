<template>
  <div>
    <div>
      <div>
        <EmployeeForm />
      </div>
      <div>
        <Message severity="info" :life="10000" :sticky="false">
        {{messages}}
        </Message>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from "../../employees/EmployeeForm";

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

<style scoped></style>
