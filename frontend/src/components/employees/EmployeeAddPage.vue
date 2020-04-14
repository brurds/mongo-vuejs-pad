<template>
  <div>
    <div>
      
      <div >
        <EmployeeForm
          :name.sync="employee.name"
          :position.sync="employee.position"
          :functional.sync="employee.functional"
          :register.sync="employee.register"
        />
      </div>

      <div class="button p-grid">
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
.button{
  
  margin: 1em 10px 1em;
}
</style>
