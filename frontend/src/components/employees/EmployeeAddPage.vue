<template>
  <div>
    <div>
      
      <div class="p-grid p-align-center p-justify-center ">
        <EmployeeForm
          :name.sync="employee.name"
          :position.sync="employee.position"
          :functional.sync="employee.functional"
          :register.sync="employee.register"
        />
      </div>

      <div class="p-grid p-align-center p-justify-center ">
        <Button @click="save" label="Salvar" class="p-button-info p-button-rounded" />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from "./EmployeeForm";
import Employee from "../../service/employee";

export default {
  components: {
    EmployeeForm,
  },

  data() {
    return {
      employee: {
        name: "",
        position: "",
        functional: "",
        register: ""
      }
    };
  },
  
  props: {
    name: String,
    position: String,
    functional: String,
    position: String
  },
  
  methods: {
    save() {
      Employee.save(this.employee)
        .then(res => console.log(res))
        .catch(err => res.send(err));
      alert('Cadastro realizado');   
    }
  }
};
</script>

<style>
</style>
