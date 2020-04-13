<template>
 <div>
    <div >
      <div class="card card-w-title">
        <h1 v-if="isAdd">Cadastrar</h1>
        <h1 v-if="!isAdd">Alterar</h1>
      </div>
      <div>
      <EmployeeForm />
      </div>
      <div>
        <Button v-if="isAdd" label="Salvar" class="p-button-info p-button-rounded" />
        <Button v-if="!isAdd" label="Alterar" class="p-button-warning p-button-rounded" />
      </div>
      <div>
       <EmployeeGrid v-if="!isAdd" />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from "./EmployeeForm";
import EmployeeGrid from "./EmployeeDataGrid"
import Employee from "../../service/employee"
export default {
  components: {
    EmployeeForm,
    EmployeeGrid
   
  },
  props: {
    pageType: {
      required: true,
      type: String
    }
  },
  mounted(){
    Employee.listAll()
    .then(res=>{
      console.log(res)
    })

  },
  computed: {
    isAdd() {
      return this.pageType == "add";
    }
  }
};
</script>

<style>
</style>