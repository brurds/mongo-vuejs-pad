<template>
  <div>
    <div>
      <div class="card card-w-title">
        <h1 v-if="isAdd">Cadastrar</h1>
        <h1 v-if="!isAdd">Alterar</h1>
      </div>
      <div>
        <EmployeeForm 
          :name.sync="employee.name"
          :position.sync="employee.position"
          :functional.sync="employee.functional"
          :register.sync="employee.register"
        />
      </div>
   
      <div>
        <Button
          v-if="isAdd"
          @click="save"
          label="Salvar"
          class="p-button-info p-button-rounded"
        />
        <Button
          v-if="!isAdd"
          label="Alterar"
          class="p-button-warning p-button-rounded"
        />
      </div>
      <div>
        <EmployeeGrid />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from "./EmployeeForm";
import EmployeeGrid from "./EmployeeDataGrid";
import Employee from "../../service/employee";


export default {
  components: {
    EmployeeForm,
    EmployeeGrid
  },
  data(){
    return{
      employee:{
        name:'',
        position:'',
        functional:'',
        register:''
      }
    }
  },
  props: {
    pageType: {
      required: true,
      type: String
    },
      name:String,
      position:String,
      functional:String,
      position:String
  },  
  computed: {
    isAdd() {
      return this.pageType == "add";
    }
  },
  methods:{
    save(){
      Employee.save(this.employee)
        .then(res=> console.log(res))
        .catch((err)=> res.send(err))
    }
  }

};
</script>

<style></style>
