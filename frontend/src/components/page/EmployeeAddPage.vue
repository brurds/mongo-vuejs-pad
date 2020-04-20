<template>
  <div>
    <div>
      <div>
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
import EmployeeForm from "../employees/EmployeeForm";
import Employee from "../../service/employee";

export default {
  components: {
    EmployeeForm
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

  methods: {
    save() {
      Employee.save(this.employee)
        .then(res => {
          console.log(res);
          this.$toast.add({severity:'success', summary: 'Cadastro', detail:'Cadastro realizado com sucesso', life: 3000});
        })
        .catch(error => {
          console.log(error)
          this.$toast.add({severity:'Error', summary: 'Cadastro', detail:'Erro ao cadastrar, verifique os campos', life: 3000});        
        });
      
    }
  }
};
</script>

<style>
.button {
  margin: 1em 10px 1em;
}
</style>
